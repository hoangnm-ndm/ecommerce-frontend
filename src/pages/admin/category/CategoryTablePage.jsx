import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap";
import categoryApi from "../../../api/categoryApi";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const CategoryTablePage = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const res = await categoryApi.getAll();
				setCategories(res);
			} catch (error) {
				console.error("Lỗi khi lấy danh mục:", error);
			}
		};

		fetchCategories();
	}, []);

	const handleDelete = async (id) => {
		if (window.confirm("Bạn có chắc chắn muốn xóa?")) {
			try {
				await categoryApi.delete(id);
				setCategories(categories.filter((cat) => cat._id !== id));
			} catch (error) {
				console.error("Lỗi khi xóa danh mục:", error);
			}
		}
	};

	return (
		<Container className="mt-4">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h2>Quản lý danh mục</h2>
				<Link to="/admin/categories/add">
					<Button variant="primary">+ Thêm danh mục</Button>
				</Link>
			</div>

			<Table striped bordered hover responsive>
				<thead className="table-dark">
					<tr>
						<th>ID</th>
						<th>Tên danh mục</th>
						<th>Mô tả danh mục</th>
						<th>Hành động</th>
					</tr>
				</thead>
				<tbody>
					{categories.length > 0 ? (
						categories.map((category) => (
							<tr key={category._id}>
								<td>{category._id}</td>
								<td>{category.title}</td>
								<td>{category.description}</td>
								<td>
									<Link to={`/admin/categories/update/${category._id}`}>
										<Button variant="warning" size="sm" className="me-2">
											<FaEdit />
										</Button>
									</Link>
									<Button variant="danger" size="sm" onClick={() => handleDelete(category._id)}>
										<FaTrash />
									</Button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="3" className="text-center">
								Không có danh mục nào.
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</Container>
	);
};

export default CategoryTablePage;

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Table, Button, Container } from "react-bootstrap";
import subCategoryApi from "../../../api/subCategoryApi";
import { FaEdit, FaTrash, FaPlus } from "react-icons/fa";

const SubCategoryTablePage = () => {
	const [subCategories, setSubCategories] = useState([]);

	useEffect(() => {
		const fetchSubCategories = async () => {
			try {
				const res = await subCategoryApi.getAll();
				setSubCategories(res);
			} catch (error) {
				console.error("Lỗi khi lấy danh mục con:", error);
			}
		};

		fetchSubCategories();
	}, []);

	const handleDelete = async (id) => {
		if (window.confirm("Bạn có chắc chắn muốn xóa danh mục con?")) {
			try {
				await subCategoryApi.delete(id);
				setSubCategories(subCategories.filter((sub) => sub._id !== id));
			} catch (error) {
				console.error("Lỗi khi xóa danh mục con:", error);
			}
		}
	};

	return (
		<Container className="mt-4">
			<div className="d-flex justify-content-between align-items-center mb-3">
				<h2>Quản lý danh mục con</h2>
				<Link to="/admin/sub-categories/add">
					<Button variant="primary">
						<FaPlus /> Thêm danh mục con
					</Button>
				</Link>
			</div>

			<Table striped bordered hover responsive>
				<thead className="table-dark">
					<tr>
						<th>ID</th>
						<th>Tên danh mục con</th>
						<th>Mô tả</th>
						<th>Thuộc danh mục</th>
						<th>Hành động</th>
					</tr>
				</thead>
				<tbody>
					{subCategories.length > 0 ? (
						subCategories.map((sub) => (
							<tr key={sub._id}>
								<td>{sub._id}</td>
								<td>{sub.title}</td>
								<td>{sub.description}</td>
								<td>{sub.categoryId?.title || "Không xác định"}</td>
								<td>
									<Link to={`/admin/sub-categories/update/${sub._id}`}>
										<Button variant="warning" size="sm" className="me-2">
											<FaEdit />
										</Button>
									</Link>
									<Button variant="danger" size="sm" onClick={() => handleDelete(sub._id)}>
										<FaTrash />
									</Button>
								</td>
							</tr>
						))
					) : (
						<tr>
							<td colSpan="5" className="text-center">
								Không có danh mục con nào.
							</td>
						</tr>
					)}
				</tbody>
			</Table>
		</Container>
	);
};

export default SubCategoryTablePage;

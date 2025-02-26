import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import subCategorySchema from "../../../validations/subCategorySchemas";
import categoryApi from "../../../api/categoryApi";
import subCategoryApi from "../../../api/subCategoryApi";

const SubCategoryFormPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);
	const [categories, setCategories] = useState([]);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(subCategorySchema),
		defaultValues: { title: "", description: "", category: "" },
	});

	// Lấy danh sách danh mục cha để chọn
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

	// Nếu có ID, lấy dữ liệu danh mục con để cập nhật
	useEffect(() => {
		if (id) {
			const fetchSubCategory = async () => {
				try {
					setLoading(true);
					const res = await subCategoryApi.getById(id);
					setValue("title", res.title);
					setValue("description", res.description);
					setValue("category", res.category?._id || "");
				} catch (error) {
					console.error("Lỗi khi lấy danh mục con:", error);
				} finally {
					setLoading(false);
				}
			};
			fetchSubCategory();
		}
	}, [id, setValue]);

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			if (id) {
				await subCategoryApi.update(id, data);
			} else {
				console.log(111);
				const res = await subCategoryApi.create(data);
				console.log(res);
			}
			navigate("/admin/sub-categories");
		} catch (error) {
			console.error("Lỗi khi lưu danh mục con:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container className="mt-4">
			<h2>{id ? "Cập nhật danh mục con" : "Tạo danh mục con mới"}</h2>
			<Form onSubmit={handleSubmit(onSubmit)} className="card p-3 shadow-sm">
				<Form.Group className="mb-3">
					<Form.Label>Tiêu đề</Form.Label>
					<Form.Control {...register("title")} />
					{errors.title && <p className="text-danger">{errors.title.message}</p>}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Mô tả</Form.Label>
					<Form.Control as="textarea" rows={4} {...register("description")} />
					{errors.description && <p className="text-danger">{errors.description.message}</p>}
				</Form.Group>

				<Form.Group className="mb-3">
					<Form.Label>Danh mục cha</Form.Label>
					<Form.Select {...register("category")}>
						<option value="">Chọn danh mục</option>
						{categories.map((cat) => (
							<option key={cat._id} value={cat._id}>
								{cat.title}
							</option>
						))}
					</Form.Select>
					{errors.category && <p className="text-danger">{errors.category.message}</p>}
				</Form.Group>

				<Button type="submit" variant="primary" disabled={loading}>
					{loading ? <Spinner size="sm" animation="border" /> : id ? "Cập nhật" : "Tạo mới"}
				</Button>
			</Form>
		</Container>
	);
};

export default SubCategoryFormPage;

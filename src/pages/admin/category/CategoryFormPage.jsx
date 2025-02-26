import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import categoryApi from "../../../api/categoryApi";
import categorySchema from "../../../validations/categorySchemas";

const CategoryFormPage = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		setValue,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(categorySchema),
		defaultValues: { title: "", description: "" },
	});

	useEffect(() => {
		if (id) {
			const fetchCategory = async () => {
				try {
					setLoading(true);
					const res = await categoryApi.getById(id);
					setValue("title", res.title);
					setValue("description", res.description);
				} catch (error) {
					console.error("Lỗi khi lấy danh mục:", error);
				} finally {
					setLoading(false);
				}
			};
			fetchCategory();
		}
	}, [id, setValue]);

	const onSubmit = async (data) => {
		try {
			setLoading(true);
			if (id) {
				await categoryApi.update(id, data);
			} else {
				await categoryApi.create(data);
			}
			navigate("/admin/categories");
		} catch (error) {
			console.error("Lỗi khi lưu danh mục:", error);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="container mt-4">
			<h2>{id ? "Cập nhật danh mục" : "Tạo danh mục mới"}</h2>
			<form onSubmit={handleSubmit(onSubmit)} className="card p-3 shadow-sm">
				<div className="mb-3">
					<label className="form-label">Tiêu đề</label>
					<input {...register("title")} className="form-control" />
					{errors.title && <p className="text-danger">{errors.title.message}</p>}
				</div>

				<div className="mb-3">
					<label className="form-label">Mô tả</label>
					<textarea {...register("description")} className="form-control" rows="4"></textarea>
					{errors.description && <p className="text-danger">{errors.description.message}</p>}
				</div>

				<button type="submit" className="btn btn-primary" disabled={loading}>
					{loading ? "Đang xử lý..." : id ? "Cập nhật" : "Tạo mới"}
				</button>
			</form>
		</div>
	);
};

export default CategoryFormPage;

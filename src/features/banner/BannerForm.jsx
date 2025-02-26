import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Container, Switch, FormControlLabel, Box } from "@mui/material";
import { z } from "zod";
import bannerApi from "../../api/bannerApi";

const bannerSchema = z.object({
	title: z.string().min(3, "Title phải có ít nhất 3 ký tự"),
	image: z.string().url("Image phải là URL hợp lệ"),
	description: z.string().optional(),
	status: z.boolean(),
});

const BannerForm = ({ banner, onSuccess }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(bannerSchema),
		defaultValues: banner || { title: "", image: "", description: "", status: true },
	});

	const onSubmit = async (data) => {
		try {
			if (banner?.id) {
				await bannerApi.update(banner.id, data);
			} else {
				await bannerApi.create(data);
			}
			onSuccess(); // Cập nhật lại danh sách
		} catch (error) {
			console.error("Lỗi khi lưu banner:", error);
		}
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="Title"
					fullWidth
					{...register("title")}
					error={!!errors.title}
					helperText={errors.title?.message}
					sx={{ mb: 3 }}
				/>
				<TextField
					label="Image URL"
					fullWidth
					{...register("image")}
					error={!!errors.image}
					helperText={errors.image?.message}
					sx={{ mb: 3 }}
				/>
				<TextField label="Description" fullWidth multiline rows={3} {...register("description")} sx={{ mb: 3 }} />
				<FormControlLabel control={<Switch {...register("status")} />} label="Active" />

				{/* Căn nút Lưu sang phải */}
				<Box sx={{ display: "flex", justifyContent: "flex-end", mt: 2 }}>
					<Button type="submit" variant="contained" color="primary">
						Lưu
					</Button>
				</Box>
			</form>
		</Container>
	);
};

export default BannerForm;

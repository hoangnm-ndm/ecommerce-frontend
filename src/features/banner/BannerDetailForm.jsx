import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextField, Button, Container } from "@mui/material";
import { z } from "zod";
import bannerApi from "../../api/bannerApi";

const bannerDetailSchema = z.object({
	banner_id: z.string().min(1, "Banner ID là bắt buộc"),
	product_id: z.string().min(1, "Product ID là bắt buộc"),
});

const BannerDetailForm = ({ bannerDetail, onSuccess }) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(bannerDetailSchema),
		defaultValues: bannerDetail || { banner_id: "", product_id: "" },
	});

	const onSubmit = async (data) => {
		try {
			if (bannerDetail?.id) {
				await bannerApi.updateDetail(bannerDetail.id, data);
			} else {
				await bannerApi.createDetail(data);
			}
			onSuccess();
		} catch (error) {
			console.error("Lỗi khi lưu banner detail:", error);
		}
	};

	return (
		<Container>
			<form onSubmit={handleSubmit(onSubmit)}>
				<TextField
					label="Banner ID"
					fullWidth
					{...register("banner_id")}
					error={!!errors.banner_id}
					helperText={errors.banner_id?.message}
				/>
				<TextField
					label="Product ID"
					fullWidth
					{...register("product_id")}
					error={!!errors.product_id}
					helperText={errors.product_id?.message}
				/>
				<Button type="submit" variant="contained" color="primary">
					Lưu
				</Button>
			</form>
		</Container>
	);
};

export default BannerDetailForm;

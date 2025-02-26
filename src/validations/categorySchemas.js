import * as z from "zod";

const categorySchema = z.object({
	title: z.string().min(3, "Tiêu đề ít nhất 3 ký tự").max(100, "Tiêu đề quá dài"),
	description: z.string().min(10, "Mô tả ít nhất 10 ký tự").max(300, "Mô tả quá dài"),
});

export default categorySchema;

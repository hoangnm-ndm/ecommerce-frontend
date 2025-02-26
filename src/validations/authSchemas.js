import { z } from "zod";

export const registerSchema = z.object({
	username: z.string().min(3, "Tên người dùng phải có ít nhất 3 ký tự"),
	email: z.string().email("Email không hợp lệ"),
	password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

export const loginSchema = z.object({
	email: z.string().email("Email không hợp lệ"),
	password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
});

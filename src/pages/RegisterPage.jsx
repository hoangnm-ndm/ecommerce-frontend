import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import authApi from "../api/authApi";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../validations/authSchemas";
import { Alert, Box, Button, Container, TextField, Typography } from "@mui/material";

export default function Register() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: zodResolver(registerSchema),
	});

	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const onSubmit = async (user) => {
		try {
			await authApi.register(user);
			navigate("/login");
		} catch (err) {
			setError(err.response?.data?.message || "Đăng ký thất bại, thử lại sau!");
		}
	};

	return (
		<Container maxWidth="sm">
			<Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
				<Typography variant="h4" gutterBottom>
					Đăng ký
				</Typography>
				{error && <Alert severity="error">{error}</Alert>}
				<form onSubmit={handleSubmit(onSubmit)}>
					<TextField
						label="Tên người dùng"
						fullWidth
						margin="normal"
						{...register("username")}
						error={!!errors.username}
						helperText={errors.username?.message}
					/>
					<TextField
						label="Email"
						fullWidth
						margin="normal"
						{...register("email")}
						error={!!errors.email}
						helperText={errors.email?.message}
					/>
					<TextField
						label="Mật khẩu"
						type="password"
						fullWidth
						margin="normal"
						{...register("password")}
						error={!!errors.password}
						helperText={errors.password?.message}
					/>
					<Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
						Đăng ký
					</Button>
				</form>
			</Box>
		</Container>
	);
}

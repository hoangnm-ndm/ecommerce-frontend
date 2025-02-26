import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography, Box, Alert } from "@mui/material";
import { loginSchema } from "../validations/authSchemas";
import authApi from "../api/authApi";

export default function Login() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({ resolver: zodResolver(loginSchema) });

	const [error, setError] = useState(null);
	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const res = await authApi.login(data);
			localStorage.setItem("token", res.accessToken);
			navigate("/admin/dashboard");
		} catch (err) {
			setError(err.response?.data?.message || "Đăng nhập thất bại, thử lại sau!");
		}
	};

	return (
		<Container maxWidth="sm">
			<Box sx={{ mt: 8, p: 4, boxShadow: 3, borderRadius: 2 }}>
				<Typography variant="h4" gutterBottom>
					Đăng nhập
				</Typography>
				{error && <Alert severity="error">{error}</Alert>}
				<form onSubmit={handleSubmit(onSubmit)}>
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
					<Button type="submit" variant="contained" color="secondary" fullWidth sx={{ mt: 2 }}>
						Đăng nhập
					</Button>
				</form>
			</Box>
		</Container>
	);
}

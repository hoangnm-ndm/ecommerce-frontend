import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import {
	Box,
	Button,
	CircularProgress,
	IconButton,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
	Paper,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const BrandTablePage = () => {
	const {
		data: brands,
		isLoading,
		error,
	} = useQuery({
		queryKey: ["brands"],
		queryFn: brandApi.getAll,
	});

	if (isLoading) return <p>Loading...</p>;
	if (error) return <p>Error loading data</p>;

	const [selectedBrand, setSelectedBrand] = useState(null);

	if (isLoading) return <CircularProgress />;
	if (error) return <Typography color="error">Lỗi khi tải dữ liệu!</Typography>;

	return (
		<Box sx={{ p: 3 }}>
			<Typography variant="h5" mb={2}>
				Quản lý Nhãn hiệu
			</Typography>
			<Button variant="contained" color="primary" sx={{ mb: 2 }}>
				Thêm Nhãn hiệu
			</Button>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Logo</TableCell>
							<TableCell>Tiêu đề</TableCell>
							<TableCell>Mô tả</TableCell>
							<TableCell>Hành động</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{brands.map((brand) => (
							<TableRow key={brand.id}>
								<TableCell>{brand.id}</TableCell>
								<TableCell>
									<img src={brand.logo} alt={brand.title} width="50" height="50" style={{ borderRadius: "8px" }} />
								</TableCell>
								<TableCell>{brand.title}</TableCell>
								<TableCell>{brand.description}</TableCell>
								<TableCell>
									<IconButton color="primary" onClick={() => setSelectedBrand(brand)}>
										<Edit />
									</IconButton>
									<IconButton color="error">
										<Delete />
									</IconButton>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</Box>
	);
};

export default BrandTablePage;

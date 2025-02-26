import React from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import bannerApi from "../../api/bannerApi";

const BannerTable = ({ banners, onEdit, onRefresh }) => {
	const handleDelete = async (id) => {
		if (window.confirm("Bạn có chắc muốn xóa banner này?")) {
			try {
				await bannerApi.delete(id);
				onRefresh(); // Load lại danh sách banner
			} catch (error) {
				console.error("Lỗi khi xóa banner:", error);
			}
		}
	};

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>Tiêu đề</TableCell>
						<TableCell>Hình ảnh</TableCell>
						<TableCell>Trạng thái</TableCell>
						<TableCell>Hành động</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{banners.map((banner) => (
						<TableRow key={banner.id}>
							<TableCell>{banner.title}</TableCell>
							<TableCell>
								<img src={banner.image} alt={banner.title} width={100} />
							</TableCell>
							<TableCell>{banner.status ? "Hiển thị" : "Ẩn"}</TableCell>
							<TableCell>
								<Button variant="contained" color="warning" onClick={() => onEdit(banner)}>
									Chỉnh sửa
								</Button>
								<Button variant="contained" color="error" onClick={() => handleDelete(banner.id)} sx={{ ml: 2 }}>
									Xóa
								</Button>
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
};

export default BannerTable;

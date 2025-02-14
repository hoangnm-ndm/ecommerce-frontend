import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import bannerApi from "../../api/bannerApi";

const BannerTable = ({ onEdit }) => {
	const [banners, setBanners] = useState([]);

	useEffect(() => {
		const fetchBanners = async () => {
			try {
				const { data } = await bannerApi.getAll();
				setBanners(data);
			} catch (error) {
				console.error("Error fetching banners:", error);
			}
		};
		fetchBanners();
	}, []);

	return (
		<TableContainer component={Paper}>
			<Table>
				<TableHead>
					<TableRow>
						<TableCell>ID</TableCell>
						<TableCell>Title</TableCell>
						<TableCell>Image</TableCell>
						<TableCell>Status</TableCell>
						<TableCell>Actions</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{banners.map((banner) => (
						<TableRow key={banner.id}>
							<TableCell>{banner.id}</TableCell>
							<TableCell>{banner.title}</TableCell>
							<TableCell>
								<img src={banner.image} alt={banner.title} width="50" />
							</TableCell>
							<TableCell>{banner.status ? "Active" : "Inactive"}</TableCell>
							<TableCell>
								<IconButton onClick={() => onEdit(banner)}>
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
	);
};

export default BannerTable;

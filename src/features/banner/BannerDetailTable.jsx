import { useEffect, useState } from "react";
import {
	Container,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Paper,
	IconButton,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import bannerApi from "../../api/bannerApi";

const BannerDetailTable = ({ onEdit }) => {
	const [bannerDetails, setBannerDetails] = useState([]);

	useEffect(() => {
		const fetchBannerDetails = async () => {
			try {
				const response = await bannerApi.getAllDetails();
				setBannerDetails(response);
			} catch (error) {
				console.error("Error fetching banner details:", error);
			}
		};
		fetchBannerDetails();
	}, []);

	return (
		<Container>
			<TableContainer component={Paper}>
				<Table>
					<TableHead>
						<TableRow>
							<TableCell>ID</TableCell>
							<TableCell>Banner ID</TableCell>
							<TableCell>Product ID</TableCell>
							<TableCell>Actions</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{bannerDetails.map((detail) => (
							<TableRow key={detail.id}>
								<TableCell>{detail.id}</TableCell>
								<TableCell>{detail.banner_id}</TableCell>
								<TableCell>{detail.product_id}</TableCell>
								<TableCell>
									<IconButton onClick={() => onEdit(detail)}>
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
		</Container>
	);
};

export default BannerDetailTable;

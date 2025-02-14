import React, { useState } from "react";
import { Button, Container, Typography, Modal, Box } from "@mui/material";
import BannerTable from "../../../features/banner/BannerTable";
import BannerForm from "../../../features/banner/BannerForm";

const BannerTablePage = () => {
	const [open, setOpen] = useState(false);
	const [selectedBanner, setSelectedBanner] = useState(null);

	const handleOpen = (banner = null) => {
		setSelectedBanner(banner);
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
		setSelectedBanner(null);
	};

	console.log("111");

	return (
		<Container>
			<Typography variant="h4" gutterBottom>
				Quản lý Banner
			</Typography>
			<Button variant="contained" color="primary" onClick={() => handleOpen()} sx={{ mb: 3 }}>
				Thêm mới banner
			</Button>

			<BannerTable onEdit={handleOpen} />

			<Modal open={open} onClose={handleClose}>
				<Box
					sx={{
						position: "absolute",
						top: "50%",
						left: "50%",
						transform: "translate(-50%, -50%)",
						width: 400,
						bgcolor: "background.paper",
						p: 4,
						boxShadow: 24,
					}}
				>
					<Typography variant="h6">{selectedBanner ? "Chỉnh sửa banner" : "Thêm mới banner"}</Typography>
					<BannerForm banner={selectedBanner} onSuccess={handleClose} />
				</Box>
			</Modal>
		</Container>
	);
};

export default BannerTablePage;

import { Box, Typography } from "@mui/material";

const FooterAdmin = () => {
	return (
		<Box
			component="footer"
			sx={{
				width: "100%",
				position: "fixed",
				bottom: 0,
				bgcolor: "#1976d2",
				color: "white",
				textAlign: "center",
				py: 1,
			}}
		>
			<Typography variant="body2">© 2025 Admin Dashboard. All Rights Reserved.</Typography>
		</Box>
	);
};

export default FooterAdmin;

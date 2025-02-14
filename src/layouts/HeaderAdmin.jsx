import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import { useState } from "react";

const HeaderAdmin = ({ onToggleSidebar }) => {
	const [anchorEl, setAnchorEl] = useState(null);

	const handleMenuOpen = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleMenuClose = () => {
		setAnchorEl(null);
	};

	return (
		<AppBar position="fixed" sx={{ zIndex: 1300, backgroundColor: "#1976d2" }}>
			<Toolbar>
				{/* Button mở Sidebar */}
				<IconButton edge="start" color="inherit" aria-label="menu" onClick={onToggleSidebar}>
					<MenuIcon />
				</IconButton>

				{/* Tiêu đề */}
				<Typography variant="h6" sx={{ flexGrow: 1 }}>
					Admin Dashboard
				</Typography>

				{/* Menu tài khoản */}
				<Box>
					<IconButton color="inherit" onClick={handleMenuOpen}>
						<AccountCircle />
					</IconButton>
					<Menu
						anchorEl={anchorEl}
						open={Boolean(anchorEl)}
						onClose={handleMenuClose}
						anchorOrigin={{ vertical: "top", horizontal: "right" }}
						transformOrigin={{ vertical: "top", horizontal: "right" }}
					>
						<MenuItem onClick={handleMenuClose}>Hồ sơ</MenuItem>
						<MenuItem onClick={handleMenuClose}>Đăng xuất</MenuItem>
					</Menu>
				</Box>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderAdmin;

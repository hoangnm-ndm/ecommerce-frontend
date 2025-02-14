import { useState } from "react";
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	Menu,
	MenuItem,
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemText,
	Box,
	TextField,
} from "@mui/material";
import { Menu as MenuIcon, Search as SearchIcon, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const menuItems = [
	{ title: "Home", path: "/" },
	{ title: "Shop", path: "/shop" },
	{
		title: "Brand",
		subMenu: [
			{ title: "Nike", path: "/brand/nike" },
			{ title: "Adidas", path: "/brand/adidas" },
		],
	},
	{
		title: "Category",
		subMenu: [
			{ title: "Men", path: "/category/men" },
			{ title: "Women", path: "/category/women" },
			{ title: "Kids", path: "/category/kids" },
		],
	},
	{ title: "News", path: "/news" },
	{ title: "About", path: "/about" },
	{ title: "Contact", path: "/contact" },
];

const Header = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const [mobileOpen, setMobileOpen] = useState(false);

	const handleMenuOpen = (event) => setAnchorEl(event.currentTarget);
	const handleMenuClose = () => setAnchorEl(null);
	const toggleMobileMenu = () => setMobileOpen(!mobileOpen);

	return (
		<AppBar position="fixed" sx={{ bgcolor: "white", color: "black", boxShadow: 2, width: "100%", zIndex: "1100" }}>
			<Toolbar sx={{ justifyContent: "space-between" }}>
				{/* Logo */}
				<Typography variant="h6" component={Link} to="/" sx={{ textDecoration: "none", color: "black" }}>
					MyShop
				</Typography>

				{/* Desktop Menu */}
				<Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
					{menuItems.map((item, index) =>
						item.subMenu ? (
							<Box key={index}>
								<Button onClick={handleMenuOpen}>{item.title}</Button>
								<Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
									{item.subMenu.map((sub, i) => (
										<MenuItem key={i} component={Link} to={sub.path} onClick={handleMenuClose}>
											{sub.title}
										</MenuItem>
									))}
								</Menu>
							</Box>
						) : (
							<Button key={index} component={Link} to={item.path}>
								{item.title}
							</Button>
						)
					)}
				</Box>

				{/* Search Bar */}
				<Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
					<TextField
						variant="outlined"
						size="small"
						placeholder="Search..."
						sx={{ display: { xs: "none", md: "block" } }}
					/>
					<IconButton>
						<SearchIcon />
					</IconButton>
				</Box>

				{/* User Menu */}
				<IconButton>
					<AccountCircle />
				</IconButton>

				{/* Mobile Menu Icon */}
				<IconButton sx={{ display: { xs: "block", md: "none" } }} onClick={toggleMobileMenu}>
					<MenuIcon />
				</IconButton>
			</Toolbar>

			{/* Mobile Drawer */}
			<Drawer anchor="left" open={mobileOpen} onClose={toggleMobileMenu}>
				<List sx={{ width: 250 }}>
					{menuItems.map((item, index) =>
						item.subMenu ? (
							<Box key={index}>
								<ListItem>
									<ListItemText primary={item.title} />
								</ListItem>
								{item.subMenu.map((sub, i) => (
									<ListItemButton key={i} component={Link} to={sub.path} onClick={toggleMobileMenu}>
										<ListItemText primary={sub.title} sx={{ pl: 4 }} />
									</ListItemButton>
								))}
							</Box>
						) : (
							<ListItemButton key={index} component={Link} to={item.path} onClick={toggleMobileMenu}>
								<ListItemText primary={item.title} />
							</ListItemButton>
						)
					)}
				</List>
			</Drawer>
		</AppBar>
	);
};

export default Header;

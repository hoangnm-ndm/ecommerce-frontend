import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
	Drawer,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Toolbar,
	Typography,
	Divider,
	IconButton,
} from "@mui/material";
import {
	Dashboard as DashboardIcon,
	ShoppingCart as ProductIcon,
	Category as CategoryIcon,
	AccountBox as UserIcon,
	Store as BrandIcon,
	ShoppingBag as OrderIcon,
	Article as ArticleIcon,
	ViewCarousel as BannerIcon,
	Subtitles as SubCategoryIcon,
	Menu as MenuIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const menuItems = [
	{ text: "Dashboard", icon: <DashboardIcon />, path: "/admin/dashboard" },
	{ text: "Quản lý sản phẩm", icon: <ProductIcon />, path: "/admin/products" },
	{ text: "Quản lý danh mục", icon: <CategoryIcon />, path: "/admin/categories" },
	{ text: "Quản lý danh mục con", icon: <SubCategoryIcon />, path: "/admin/sub-categories" },
	{ text: "Quản lý người dùng", icon: <UserIcon />, path: "/admin/users" },
	{ text: "Quản lý nhãn hiệu", icon: <BrandIcon />, path: "/admin/brands" },
	{ text: "Quản lý order", icon: <OrderIcon />, path: "/admin/orders" },
	{ text: "Quản lý bài viết", icon: <ArticleIcon />, path: "/admin/posts" },
	{ text: "Quản lý banner", icon: <BannerIcon />, path: "/admin/banners" },
];

const SidebarAdmin = () => {
	const location = useLocation();
	const [open, setOpen] = useState(true);

	return (
		<Drawer
			sx={{
				width: open ? drawerWidth : 60,
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: open ? drawerWidth : 60,
					boxSizing: "border-box",
					transition: "width 0.3s",
				},
			}}
			variant="permanent"
			anchor="left"
		>
			<Toolbar>
				<IconButton onClick={() => setOpen(!open)}>
					<MenuIcon />
				</IconButton>
				{open && <Typography variant="h6">Admin Panel</Typography>}
			</Toolbar>
			<Divider />
			<List>
				{menuItems.map((item) => (
					<ListItem key={item.text} disablePadding>
						<ListItemButton component={Link} to={item.path} selected={location.pathname === item.path}>
							<ListItemIcon>{item.icon}</ListItemIcon>
							{open && <ListItemText primary={item.text} />}
						</ListItemButton>
					</ListItem>
				))}
			</List>
		</Drawer>
	);
};

export default SidebarAdmin;

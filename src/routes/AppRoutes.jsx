import { useRoutes } from "react-router-dom";
import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutClient from "../layouts/LayoutClient";
import AboutPage from "../pages/AboutPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotfoundPage from "../pages/NotfoundPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/admin/Dashboard";
import BannerTablePage from "../pages/admin/banner/BannerTablePage";
import BannerDetailTablePage from "../pages/admin/bannerDetail/BannerDetailTablePage";
import BrandFormPage from "../pages/admin/brand/BrandFormPage";
import BrandTablePage from "../pages/admin/brand/BrandTablePage";
import ProtectedRoute from "./ProtectedRoute";
import ProfilePage from "../pages/ProfilePage";
import OrderPage from "../pages/OrderPage";
import CategoryTablePage from "../pages/admin/category/CategoryTablePage";
import CategoryFormPage from "../pages/admin/category/CategoryFormPage";
import SubCategoryTablePage from "../pages/admin/subCategory/SubCategoryTablePage";
import SubCategoryFormPage from "../pages/admin/subCategory/SubCategoryFormPage";

const AppRoutes = () => {
	const routes = [
		// Client Layout
		{
			path: "/",
			element: <LayoutClient />,
			children: [
				{ path: "", element: <HomePage /> },
				{ path: "about", element: <AboutPage /> },
			],
		},

		// User Layout (Khách hàng đã đăng nhập)
		{
			path: "/user",
			element: <ProtectedRoute allowedRoles={["customer", "admin", "manager"]} />,
			children: [
				{ path: "order", element: <OrderPage /> },
				{ path: "profile", element: <ProfilePage /> },
			],
		},

		// Empty layout
		{ path: "/register", element: <RegisterPage /> },
		{ path: "/login", element: <LoginPage /> },

		// Admin layout

		{
			path: "/admin",
			element: <ProtectedRoute allowedRoles={["admin"]} />,
			children: [
				{
					path: "",
					element: <LayoutAdmin />,
					children: [
						{ path: "", element: <Dashboard /> },
						{ path: "dashboard", element: <Dashboard /> },
						{ path: "brands", element: <BrandTablePage /> },
						{ path: "brands/add", element: <BrandFormPage /> },
						{ path: "banners", element: <BannerTablePage /> },
						{ path: "banner-detail", element: <BannerDetailTablePage /> },

						// { path: "brands/update/:id", element: <BrandForm /> },
						{ path: "categories", element: <CategoryTablePage /> },
						{ path: "categories/add", element: <CategoryFormPage /> },
						{ path: "categories/update/:id", element: <CategoryFormPage /> },
						{ path: "sub-categories", element: <SubCategoryTablePage /> },
						{ path: "sub-categories/add", element: <SubCategoryFormPage /> },
						{ path: "sub-categories/update/:id", element: <SubCategoryFormPage /> },
						// { path: "products", element: <ProductTable /> },
						// { path: "products/add", element: <ProductForm /> },
						// { path: "products/update/:id", element: <ProductForm /> },
					],
				},
			],
		},

		// Not Found Page
		{ path: "*", element: <NotfoundPage /> },
	];

	return useRoutes(routes);
};

export default AppRoutes;

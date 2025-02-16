import { useRoutes } from "react-router-dom";
import LayoutClient from "../layouts/LayoutClient";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import LayoutAdmin from "../layouts/LayoutAdmin";
import NotfoundPage from "../pages/NotfoundPage";
import Dashboard from "../pages/admin/Dashboard";
import BrandTablePage from "../pages/admin/brand/BrandTablePage";
import BrandFormPage from "../pages/admin/brand/BrandFormPage";
import BannerTable from "../features/banner/BannerTable";
import BannerForm from "../features/banner/BannerForm";
import BannerDetailTable from "../features/banner/BannerDetailTable";
import BannerDetailForm from "../features/banner/BannerDetailForm";
import BannerTablePage from "../pages/admin/banner/BannerTablePage";
import BannerFormPage from "../pages/admin/banner/BannerFormPage";
import BannerDetailTablePage from "../pages/admin/bannerDetail/BannerDetailTablePage";
import BannerDetailFormPage from "../pages/admin/bannerDetail/BannerDetailFormPage";
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
						// { path: "categories", element: <CategoryTable /> },
						// { path: "categories/add", element: <CategoryForm /> },
						// { path: "categories/update/:id", element: <CategoryForm /> },
						// { path: "sub-categories", element: <SubCategoryTable /> },
						// { path: "sub-categories/add", element: <SubCategoryForm /> },
						// { path: "sub-categories/update/:id", element: <SubCategoryForm /> },
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

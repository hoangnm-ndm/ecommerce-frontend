import SidebarAdmin from "../components/ui/SidebarAdmin";
import { Box } from "@mui/material";
import HeaderAdmin from "./HeaderAdmin";
import FooterAdmin from "./FooterAdmin";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const LayoutAdmin = () => {
	const [isSidebarOpen, setSidebarOpen] = useState(true);

	return (
		<Box sx={{ display: "flex" }}>
			{/* Sidebar điều hướng */}
			{isSidebarOpen && <SidebarAdmin />}

			<Box sx={{ flexGrow: 1, minHeight: "100vh", display: "flex", flexDirection: "column" }}>
				{/* Header Admin */}
				<HeaderAdmin onToggleSidebar={() => setSidebarOpen(!isSidebarOpen)} />

				{/* Nội dung chính */}
				<Box component="main" sx={{ flexGrow: 1, mt: 8, mb: 6, p: 3 }}>
					<Outlet /> {/* Render nội dung con của LayoutAdmin */}
				</Box>

				{/* Footer Admin */}
				<FooterAdmin />
			</Box>
		</Box>
	);
};

export default LayoutAdmin;

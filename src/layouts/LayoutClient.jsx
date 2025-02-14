import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

const LayoutClient = () => {
	return (
		<>
			<Header />
			<h1>hello khach</h1>
			<Outlet />
			<Footer />
		</>
	);
};

export default LayoutClient;

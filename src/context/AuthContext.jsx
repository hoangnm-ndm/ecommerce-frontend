import { createContext, useContext, useEffect, useState } from "react";
import authApi from "../api/authApi";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	const fetchUser = async () => {
		try {
			const user = await authApi.getProfile();
			setUser(user);
		} catch (error) {
			setUser({ role: "guest" });
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchUser();
	}, []);

	const login = async (username, password) => {
		await authApi.login({ username, password });
		fetchUser(); // GOI API de lay thong tin user sau khi login
	};

	const logout = async () => {
		await authApi.logout();
		setUser({ role: "guest" }); // Khi logout, đặt lại là khách vãng lai
	};

	return (
		<AuthContext.Provider value={{ user, loading, login, logout }}>
			{!loading && children} {/* Chỉ render khi đã xác định quyền */}
		</AuthContext.Provider>
	);
};

// Hook để sử dụng Auth
export const useAuth = () => useContext(AuthContext);

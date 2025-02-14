import axios from "axios";

const axiosClient = axios.create({
	baseURL: "http://localhost:8888/api",
	headers: {
		"Content-Type": "application/json",
	},
});

// Thêm interceptor để tự động gửi token
axiosClient.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default axiosClient;

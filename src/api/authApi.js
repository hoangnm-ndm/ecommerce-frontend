import axiosClient from "./axiosClient";
import handleRequest from "./handleRequest";

const authApi = {
	login: (data) => handleRequest(axiosClient.post("/auth/login", data)),
	register: (data) => handleRequest(axiosClient.post("/auth/register", data, { withCredentials: true })),
	getProfile: () => handleRequest(axiosClient.get("/auth/profile", { withCredentials: true })),
	logout: () => handleRequest(axiosClient.post("/auth/logout", {}, { withCredentials: true })),
};

export default authApi;

import axiosClient from "./axiosClient";
import handleRequest from "./handleRequest";

const categoryApi = {
	getAll: () => handleRequest(axiosClient.get("/categories")),
	getById: (id) => handleRequest(axiosClient.get(`/categories/${id}`)),
	create: (data) => handleRequest(axiosClient.post("/categories", data)),
	update: (id, data) => handleRequest(axiosClient.patch(`/categories/${id}`, data)),
	delete: (id) => handleRequest(axiosClient.delete(`/categories/${id}`)),
	get: (id) => handleRequest(axiosClient.get(`/categories/${id}`)),
};

export default categoryApi;

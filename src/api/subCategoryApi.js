import axiosClient from "./axiosClient";
import handleRequest from "./handleRequest";

const subCategoryApi = {
	getAll: () => handleRequest(axiosClient.get("/sub-categories")),
	getById: (id) => handleRequest(axiosClient.get(`/sub-categories/${id}`)),
	create: (data) => handleRequest(axiosClient.post("/sub-categories", data)),
	update: (id, data) => handleRequest(axiosClient.patch(`/sub-categories/${id}`, data)),
	delete: (id) => handleRequest(axiosClient.delete(`/sub-categories/${id}`)),
	get: (id) => handleRequest(axiosClient.get(`/sub-categories/${id}`)),
};

export default subCategoryApi;

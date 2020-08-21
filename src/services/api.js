import axios from "../config/axios";

export const authenticateUserAPI = (method, url, data) => {
	return axios({
		method,
		url,
		data
	});
};

export const convertToJSONAPI = (method, url, data) => {
	return axios({
		method,
		url,
		data
	});
};

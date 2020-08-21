import * as actionTypes from "../actionTypes";

import { addErrorMessage, removeErrorMessage, addSuccessMessage, removeSuccessMessage } from ".";

import { convertToJSONAPI } from "../../services/api";

export const handleNewUser = (newUser) => {
	return {
		type: actionTypes.SAVE_USER,
		newUser
	};
};

export const newUser = (data) => {
	return async (dispatch) => {
		try {
			const res = await convertToJSONAPI("POST", "/convert/json", data);
			dispatch(removeErrorMessage());
			dispatch(addSuccessMessage({ message: res.data.message }));
			dispatch(handleNewUser(data));
		} catch (err) {
			const { data } = err.response;
			console.log(err.response.data);
			dispatch(removeSuccessMessage());
			dispatch(addErrorMessage({ message: data.message }));
		}
	};
};

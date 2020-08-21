import * as actionTypes from "../actionTypes";

import { SUCCESS_MESSAGES } from "../../config/constants";

import history from "../../history";

import { addErrorMessage, removeErrorMessage, addSuccessMessage, removeSuccessMessage } from ".";

import { authenticateUserAPI } from "../../services/api";

export const handleAuthenticateUser = (account) => {
	return {
		type: actionTypes.LOGIN,
		account
	};
};

export const authenticateUser = ({ code }) => {
	return async (dispatch) => {
		try {
			const user = await authenticateUserAPI("POST", "/auth", {
				client_id: process.env.REACT_APP_CLIENT_ID,
				code,
				redirect_uri: process.env.REACT_APP_REDIRECT_URI
			});
			dispatch(handleAuthenticateUser({ isLoggedIn: true, user: { ...user.data } }));
			dispatch(removeErrorMessage());
			dispatch(addSuccessMessage(SUCCESS_MESSAGES.LOGGED_IN));
			history.push("/profile");
		} catch (err) {
			const { data } = err.response;
			dispatch(removeSuccessMessage());
			dispatch(addErrorMessage({ message: data.message }));
		}
	};
};

export const handleLogout = () => {
	return {
		type: actionTypes.LOGOUT
	};
};

export const logout = () => {
	return async (dispatch) => {
		try {
			dispatch(handleLogout());
			dispatch(removeErrorMessage());
			dispatch(addSuccessMessage(SUCCESS_MESSAGES.LOGGED_OUT));
		} catch (err) {
			dispatch(removeSuccessMessage());
			dispatch(addErrorMessage({ message: "Unable to logout!" }));
		}
	};
};

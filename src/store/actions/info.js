import { ADD_ERROR_MESSAGE, REMOVE_ERROR_MESSAGE, ADD_SUCCESS_MESSAGE, REMOVE_SUCCESS_MESSAGE } from "../actionTypes";

export const addErrorMessage = (error) => ({
	type: ADD_ERROR_MESSAGE,
	error
});

export const removeErrorMessage = () => ({
	type: REMOVE_ERROR_MESSAGE
});

export const addSuccessMessage = (success) => ({
	type: ADD_SUCCESS_MESSAGE,
	success
});

export const removeSuccessMessage = () => ({
	type: REMOVE_SUCCESS_MESSAGE
});

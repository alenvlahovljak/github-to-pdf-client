import { ADD_ERROR_MESSAGE, REMOVE_ERROR_MESSAGE, ADD_SUCCESS_MESSAGE, REMOVE_SUCCESS_MESSAGE } from "../actionTypes";

const DEFAULT_STATE = {
	error: null,
	success: null
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case ADD_ERROR_MESSAGE:
			return {
				...state,
				error: action.error
			};
		case REMOVE_ERROR_MESSAGE:
			return {
				...state,
				error: null
			};
		case ADD_SUCCESS_MESSAGE:
			return {
				...state,
				success: action.success
			};
		case REMOVE_SUCCESS_MESSAGE:
			return {
				...state,
				success: null
			};
		default:
			return state;
	}
};

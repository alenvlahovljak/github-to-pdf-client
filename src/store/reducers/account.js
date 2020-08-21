import { LOGIN, LOGOUT } from "../actionTypes";

const DEFAULT_STATE = {
	isLoggedIn: JSON.parse(localStorage.getItem("isLoggedIn")) || false,
	user: JSON.parse(localStorage.getItem("user")) || null
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case LOGIN:
			const { isLoggedIn, user } = action.account;
			localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
			localStorage.setItem("user", JSON.stringify(user));
			return {
				isLoggedIn,
				user: { ...user }
			};
		case LOGOUT:
			localStorage.clear();
			return {
				isLoggedIn: false,
				user: null
			};
		default:
			return state;
	}
};

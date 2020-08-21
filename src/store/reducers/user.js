import { SAVE_USER } from "../actionTypes";

const DEFAULT_STATE = {
	newUser: {}
};

export default (state = DEFAULT_STATE, action) => {
	switch (action.type) {
		case SAVE_USER:
			return {
				newUser: { ...action.newUser }
			};
		default:
			return state;
	}
};

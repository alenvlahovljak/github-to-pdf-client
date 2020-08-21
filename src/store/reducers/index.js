import { combineReducers } from "redux";

import account from "./account";
import user from "./user";
import info from "./info";

const rootReducer = combineReducers({
	info,
	user,
	account
});

export default rootReducer;

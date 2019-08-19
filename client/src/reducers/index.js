import { combineReducers } from "redux";
import errorsReducer from "./errorsReducer";
import authReducer from "./authReducer";
import chatsReducer from "./chatsReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
	categories: categoriesReducer,
	chats: chatsReducer,
	auth: authReducer,
	errors: errorsReducer
});

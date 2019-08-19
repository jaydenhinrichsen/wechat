import isEmpty from "utils/isEmpty";

import { SET_CURRENT_USER, USER_LOADING, USER_LOADED } from "../actions/types";

const initialState = {
	isAuthenticated: false,
	user: {},
	loading: false,
	loaded: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case USER_LOADING:
			return {
				...state,
				loading: true
			};
		case USER_LOADED:
			return {
				...state,
				loaded: true
			};
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(action.payload),
				user: action.payload
			};
		default:
			return state;
	}
}

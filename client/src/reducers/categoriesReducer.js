import {
	CATEGORIES_LOADING,
	CREATE_CATEGORY,
	GET_CATEGORIES,
	CLEAR_CATEGORIES
} from "actions/types";

const initialState = {
	categories: [],
	loading: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CATEGORIES_LOADING:
			return {
				...state,
				loading: true
			};

		case GET_CATEGORIES:
			return {
				...state,
				loading: false,
				categories: action.payload
			};
		case CLEAR_CATEGORIES:
			return {
				...state,
				loading: false,
				categories: []
			};
		case CREATE_CATEGORY:
			return {
				...state,
				categories: [action.payload, ...state.categories]
			};
		default:
			return state;
	}
}

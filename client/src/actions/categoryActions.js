import axios from "axios";
import {
	CATEGORIES_LOADING,
	CREATE_CATEGORY,
	GET_CATEGORIES,
	GET_ERRORS,
	CLEAR_ERRORS,
	CLEAR_CATEGORIES
} from "./types";

// Create Categories
export const createCategory = data => dispatch => {
	axios
		.post(`/api/categories/`, data)
		.then(res =>
			dispatch({
				type: CREATE_CATEGORY,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Create Categories
export const getCategories = () => dispatch => {
	dispatch(setCategoriesLoading());
	axios
		.get(`/api/categories/all`)
		.then(res =>
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get Categories
export const searchCategories = query => dispatch => {
	dispatch(setCategoriesLoading());
	axios
		.get(`/api/categories/search/${query}`)
		.then(res =>
			dispatch({
				type: GET_CATEGORIES,
				payload: res.data
			})
		)
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

export const setCategoriesLoading = () => {
	return {
		type: CATEGORIES_LOADING
	};
};

export const clearCategories = () => {
	return {
		type: CLEAR_CATEGORIES
	};
};

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

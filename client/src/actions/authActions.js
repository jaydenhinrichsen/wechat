import axios from "axios";
import setAuthToken from "utils/setAuthToken";
import jwt_decode from "jwt-decode";

import { GET_ERRORS, SET_CURRENT_USER, CLEAR_ERRORS } from "./types";

// Register User
export const registerUser = (data, history) => dispatch => {
	dispatch(clearErrors());
	axios
		.post("/api/users/register", data)
		.then(res => history.push("/login"))
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Login - Get User Token
export const loginUser = data => dispatch => {
	dispatch(clearErrors());
	axios
		.post("/api/users/login", data)
		.then(res => {
			const user = res.data.token;

			// Set token to ls
			localStorage.setItem("user", user);
			// Set token to Auth header
			setAuthToken(user);
			// Decode token to get user data
			const decodedUser = jwt_decode(user);

			dispatch(setCurrentUser(decodedUser.user));
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Set logged in user
export const setCurrentUser = decodedUserToken => {
	return {
		type: SET_CURRENT_USER,
		payload: decodedUserToken
	};
};

// Set logged in user
export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

// Log user out
export const logoutUser = () => dispatch => {
	// Remove token from localStorage
	localStorage.removeItem("user");
	// Remove auth header for future requests
	setAuthToken(false);
	// Set current user to {} which will set isAuthenticated to false
	dispatch(setCurrentUser({}));
};

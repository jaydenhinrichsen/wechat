import axios from "axios";
import {
	CHATS_LOADING,
	CHATS_LOADED,
	DELETE_CHAT,
	CREATE_CHAT,
	GET_CHAT,
	GET_CHATS,
	UPDATE_CHAT,
	GET_ERRORS,
	CLEAR_ERRORS
} from "./types";

// Create Chat
export const createChat = (data, history) => dispatch => {
	axios
		.post(`/api/chats/`, data)
		.then(res => {
			dispatch(clearErrors());
			dispatch({
				type: CREATE_CHAT,
				payload: res.data
			});
			history.push("/explore");
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Create Chat
export const getChat = chat => dispatch => {
	dispatch(setChatsLoading());
	axios
		.get(`/api/chats/single/${chat}`)
		.then(res => {
			dispatch({
				type: GET_CHAT,
				payload: res.data
			});
			dispatch(setChatsLoaded());
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Get Chats
export const getChats = () => dispatch => {
	dispatch(setChatsLoading());
	axios
		.get(`/api/chats/all`)
		.then(res => {
			dispatch({
				type: GET_CHATS,
				payload: res.data
			});
			dispatch(setChatsLoaded());
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Update Chat
export const updateChat = data => dispatch => {
	dispatch(setChatsLoading());
	axios
		.put(`/api/chats/`, data)
		.then(res => {
			dispatch({
				type: UPDATE_CHAT,
				payload: res.data
			});
			dispatch(setChatsLoaded());
		})
		.catch(err =>
			dispatch({
				type: GET_ERRORS,
				payload: err.response.data
			})
		);
};

// Delete Chat
export const deleteChat = chat => dispatch => {
	axios
		.delete(`/api/chats/${chat}`)
		.then(res =>
			dispatch({
				type: DELETE_CHAT,
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

export const setChatsLoading = () => {
	return {
		type: CHATS_LOADING
	};
};

export const setChatsLoaded = () => {
	return {
		type: CHATS_LOADED
	};
};

export const clearErrors = () => {
	return {
		type: CLEAR_ERRORS
	};
};

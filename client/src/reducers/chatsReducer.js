import {
	CHATS_LOADING,
	CHATS_LOADED,
	CREATE_CHAT,
	GET_CHATS,
	GET_CHAT,
	DELETE_CHAT,
	UPDATE_CHAT
} from "actions/types";

const initialState = {
	chats: [],
	chat: {},
	loading: false,
	loaded: false
};

export default function(state = initialState, action) {
	switch (action.type) {
		case CHATS_LOADING:
			return {
				...state,
				loading: true
			};
		case CHATS_LOADED:
			return {
				...state,
				loaded: true
			};

		case GET_CHATS:
			return {
				...state,
				loading: false,
				chats: action.payload
			};
		case GET_CHAT:
			return {
				...state,
				loading: false,
				chat: action.payload
			};
		case UPDATE_CHAT:
			return {
				...state,
				loading: false,
				chats: [
					...state.chats.filter(chat => chat._id !== action.payload_id),
					action.payload
				]
			};
		case DELETE_CHAT:
			return {
				...state,
				chats: state.chats.filter(chat => chat._id !== action.payload)
			};
		case CREATE_CHAT:
			return {
				...state,
				chats: [action.payload, ...state.chats]
			};
		default:
			return state;
	}
}

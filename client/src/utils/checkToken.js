import setAuthToken from "./setAuthToken";
import { logoutUser, setCurrentUser } from "actions/authActions";
import jwt_decode from "jwt-decode";

// Redux state management
import store from "store";

export default function checkToken() {
	// Check for token
	if (localStorage.user) {
		setAuthToken(localStorage.user);
		const decoded = jwt_decode(localStorage.user);
		store.dispatch(setCurrentUser(decoded.user));

		const currentTime = Date.now() / 5000;
		if (decoded.exp < currentTime) {
			store.dispatch(logoutUser());
			window.location.href = "/login";
		}
	}
}

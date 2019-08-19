/**
 * paths
 *
 * All views of the application correspond to an object with a name and path.
 * This makes it easier to change/refactor routes in the future.
 *
 */
const paths = {
	landing: {
		name: "Home",
		path: "/"
	},
	login: {
		name: "Login",
		path: "/login"
	},
	register: {
		name: "Register",
		path: "/register"
	},
	explore: {
		name: "Explore",
		path: "/explore"
	},
	newChat: {
		name: "New Chat",
		path: "/chats/new"
	},
	chat: {
		name: "Chat",
		path: "/chat"
	},
	settings: {
		name: "Settings",
		path: "/settings"
	}
};

export default paths;

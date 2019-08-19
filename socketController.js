// Utils
const isEmpty = require("./utils/isEmpty");
const toObjectId = require("./utils/toObjectId");
const Chat = require("./models/Chat");

/**
 * socketController
 *
 *
 * @description Handles all socket events
 */
const socketController = io => {
	// This is where we keep track of the users that are currently connected.
	let connections = {};
	let chats = {};
	io.on("connection", socket => {
		let isTypingTimeout;
		let currentChat;
		let user = JSON.parse(socket.handshake.query.user);

		// Add user to connections object when they first connect
		connections[socket.id] = user;

		// Join a chat
		socket.on("join_chat", data => {
			if (!isEmpty(chats[data])) {
				chats[data].push(connections[socket.id]);
			} else {
				chats[data] = [connections[socket.id]];
			}
			console.log(data, chats);
			currentChat = data;
			socket.join(data);
			io.to(data).emit("chat_members", chats[data]);
		});

		// Handle an incoming message from a user
		socket.on("message", data => {
			// Send message to everyone except the sender
			socket.broadcast.to(currentChat).emit("message", data);
			socket.broadcast.to(currentChat).emit("someone_stopped_typing", user);

			Chat.findByIdAndUpdate(toObjectId(currentChat), {
				$push: { messages: data }
			}).then(chat => console.log(chat));
		});

		// Handle when the user starts typing
		socket.on("typing", () => {
			// Get user data from connections
			let user = connections[socket.id];

			// Clear any old timeouts
			clearInterval(isTypingTimeout);

			// Create new timeout
			isTypingTimeout = setTimeout(() => {
				socket.broadcast.to(currentChat).emit("someone_stopped_typing", user);
			}, 5000);

			// Tell everyone except the user
			socket.broadcast.to(currentChat).emit("someone_typing", user);
		});

		// Handle when the user stops typing
		socket.on("stopped_typing", () => {
			// Get user data from connections
			let user = connections[socket.id];

			// Clear any old timeouts
			clearInterval(isTypingTimeout);

			// Tell everyone except the user
			socket.broadcast.to(currentChat).emit("someone_stopped_typing", user);
		});

		// Remove a user from the connections object when they disconnect
		socket.on("disconnect", () => {
			if (!isEmpty(chats[currentChat])) {
				for (let i = 0; i < chats[currentChat].length; i++) {
					if (chats[currentChat][i]._id === connections[socket.id]._id) {
						chats[currentChat].splice(i, 1);
					}
				}
			}

			socket.broadcast.to(currentChat).emit("chat_members", chats[currentChat]);
			delete connections[socket.id];
			socket.close;
		});
	});
};
module.exports = socketController;

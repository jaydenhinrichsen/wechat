// Utils
const toObjectId = require("../utils/toObjectId");
// Models
const Chat = require("../models/Chat");
const User = require("../models/User");

module.exports = {
	// Create a new chat
	create: function(req, res) {
		let newChat = new Chat(req.body);

		newChat
			.save()
			.then(chat => res.json(chat))
			.catch(err => res.json(err));
	},

	// Find one chat by _id
	findOne: function(req, res) {
		Chat.findById(toObjectId(req.params.chat))
			.populate("user", "_id firstName lastName email", User)

			.then(chat => res.json(chat))
			.catch(err => res.json(err));
	},

	// Find all chats
	findAll: function(req, res) {
		Chat.find()
			.populate("user", "_id firstName lastName email", User)
			// .populate("members", "_id firstName lastName email", User)
			.then(chats => res.json(chats))
			.catch(err => res.json(err));
	}
};

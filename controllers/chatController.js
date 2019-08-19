// Utils
const toObjectId = require("../utils/toObjectId");
// Models
const Chat = require("../models/Chat");
const User = require("../models/User");
const Category = require("../models/Category");

// Vailidation
const validateChatInput = require("../validation/chat");

module.exports = {
	// Create a new chat
	create: function(req, res) {
		const { errors, isValid } = validateChatInput(req.body);
		if (!isValid) {
			return res.status(400).json(errors);
		} else {
			Chat.find({
				name: req.body.name
			})
				.then(results => {
					if (results && results.length > 0) {
						errors.name = "That chat name already exists";
						return res.status(400).json(errors);
					} else {
						let newChat = new Chat(req.body);

						newChat
							.save()
							.then(chat => res.json(chat))
							.catch(err => res.json(err));
					}
				})
				.catch(err => res.json(err));
		}
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
			.populate("category", "", Category)
			.then(chats => res.json(chats))
			.catch(err => res.json(err));
	}
};

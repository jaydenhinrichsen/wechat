const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const ChatSchema = new Schema({
	user: {
		type: mongoose.Schema.ObjectId,
		ref: "User",
		required: true
	},
	name: {
		type: String,
		required: true
	},
	category: {
		type: mongoose.Schema.ObjectId,
		ref: "Category",
		required: true
	},

	members: [
		{
			type: mongoose.Schema.ObjectId,
			ref: "User",
			required: true
		}
	],
	messages: [
		{
			type: Object,
			default: {}
		}
	],

	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = Chat = mongoose.model("Chat", ChatSchema);

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const CategorySchema = new Schema({
	name: {
		type: String,
		required: true
	},
	created: {
		type: Date,
		default: Date.now
	}
});

module.exports = Category = mongoose.model("Category", CategorySchema);

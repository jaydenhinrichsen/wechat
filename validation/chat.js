const Validator = require("validator");
const isEmpty = require("../utils/isEmpty");

module.exports = function validateChatInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : "";

	if (Validator.isEmpty(data.name)) {
		errors.name = "Please enter a chat name";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

const Validator = require("validator");
const isEmpty = require("../utils/isEmpty");


module.exports = function validateLoginInput(data) {
	let errors = {};

	data.email = !isEmpty(data.email) ? data.email : "";
	
	data.password = !isEmpty(data.password) ? data.password : "";

	if (!Validator.isEmail(data.email)) {
		errors.email = "Email is invalid";
	}

	// Check that email isn't empty
	if (Validator.isEmpty(data.email)) {
		errors.email = "Email field is required";
	}
// Check that password isn't empty
	if (Validator.isEmpty(data.password)) {
		errors.password = "Password field is required";
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};

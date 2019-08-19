const Validator = require("validator");
const isEmpty = require("../utils/isEmpty");


module.exports = function validateLoginInput(data) {
	let errors = {};

	data.name = !isEmpty(data.name) ? data.name : "";
	


	return {
		errors,
		isValid: isEmpty(errors)
	};
};

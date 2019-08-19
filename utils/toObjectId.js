const mongoose = require("mongoose");

/**
 * toObjectId
 *
 * Transforms a string into a mongoose object id for use in queries
 *
 * @param {value} value
 */
const toObjectId = value => {
	return mongoose.Types.ObjectId(value);
};

module.exports = toObjectId;

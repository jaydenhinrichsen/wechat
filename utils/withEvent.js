/**
 * withEvent
 */

// Helper Functions
const toObjectId = require("../utils/toObjectId");
const Event = require("../models/Event");

/**
 * Wrap a query with an event.
 * Eg. Creating a new Customer
 *
 * @param {Function} query
 * @param {Object} event
 *
 * @returns {Promise}
 */
const withEvent = (query, event) => {
	let newEvent = new Event(event);
	newEvent.save();

	return Promise.all([
		query,
		Event.findById(toObjectId(newEvent._id)).populate("data")
	]);
};

module.exports = withEvent;

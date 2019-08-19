// Utils
const toObjectId = require("../utils/toObjectId");
// Models
const Category = require("../models/Category");
const User = require("../models/User");

module.exports = {
	// Create a new Category
	create: function(req, res) {
		let name = req.body.name.toString().toLowerCase();
		Category.find({ name: name }).then(results => {
			if (results.length > 0) {
				console.log("Category already exists");
			} else {
				let newCategory = new Category({
					name: req.body.name
				});

				newCategory
					.save()
					.then(category => res.json(category))
					.catch(err => res.json(err));
			}
		});
	},

	// Find all categories
	findAll: function(req, res) {
		Category.find()
			.then(categories => res.json(categories))
			.catch(err => res.json(err));
	},

	search: function(req, res) {
		Category.find({
			name: { $regex: req.params.query, $options: "i" }
		})
			.then(results => res.json(results))
			.catch(err => console.log(err));
	}
};

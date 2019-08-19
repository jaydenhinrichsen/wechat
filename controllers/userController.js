const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../config/keys");
const passport = require("passport");
// Utils
const toObjectId = require("../utils/toObjectId");
// Model
const User = require("../models/User");

// Validation
const validateRegisterInput = require("../validation/register");
const validateLoginInput = require("../validation/login");

/**
 * userController
 *
 */
module.exports = {
	// Register a new user
	register: function(req, res) {
		User.findOne({ email: req.body.email }).then(user => {
			const { errors, isValid } = validateRegisterInput(req.body);
			// Check Validation
			if (!isValid) {
				return res.status(400).json(errors);
			}
			// Validation
			if (user) {
				errors.email = "Email already exists";
				return res.status(400).json(errors);
			} else {
				const newUser = new User({
					firstName: req.body.firstName,
					lastName: req.body.lastName,
					email: req.body.email,
					password: req.body.password
				});

				bcrypt.genSalt(10, (err, salt) => {
					bcrypt.hash(newUser.password, salt, (err, hash) => {
						if (err) throw err;
						newUser.password = hash;
						newUser
							.save()
							.then(user => res.json(user))
							.catch(err => console.log(err));
					});
				});
			}
		});
	},

	// Log in a user
	login: function(req, res) {
		// console.log(req);
		const { errors, isValid } = validateLoginInput(req.body);

		// Check Validation
		if (!isValid) {
			return res.status(400).json(errors);
		}

		const email = req.body.email;
		const password = req.body.password;

		// Find user by email
		User.findOne({ email }).then(user => {
			// Check for user
			if (!user) {
				errors.email = "User not found";
				return res.status(404).json(errors);
			}

			// Check Password
			bcrypt.compare(password, user.password).then(isMatch => {
				if (isMatch) {
					// User Matched
					const userPayload = {
						user: {
							_id: user.id,
							firstName: user.firstName,
							lastName: user.lastName,
							email: user.email
						}
					};

					// Create JWT Payload
					jwt.sign(
						userPayload,
						keys.secretOrKey,
						{ expiresIn: 3600 },
						(err, token) =>
							res.json({ success: true, token: "Bearer " + token })
					);
				} else {
					errors.password = "Password incorrect";
					return res.status(400).json(errors);
				}
			});
		});
	}
};

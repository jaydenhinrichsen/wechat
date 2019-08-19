const express = require("express");
const router = express.Router();

// Controllers
const userController = require("../../controllers/userController");

/**
 * users
 *
 * Points to "...:5000/api/users"
 *
 */

// Register a new user
router.route("/register").post(userController.register);

// Log in a user
router.route("/login").post(userController.login);

module.exports = router;

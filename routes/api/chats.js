const express = require("express");
const router = express.Router();

// Controllers
const chatController = require("../../controllers/chatController");

// Create a new chat
router.route("/").post(chatController.create);

// Get a chat
router.route("/single/:chat").get(chatController.findOne);

// Get all chats
router.route("/all").get(chatController.findAll);
module.exports = router;

const express = require("express");
const router = express.Router();

// Controllers
const categoryController = require("../../controllers/categoryController");

// Create a new category
router.route("/").post(categoryController.create);

// Get a category
router.route("/all").get(categoryController.findAll);

// Get all categorys
router.route("/search/:query").get(categoryController.search);
module.exports = router;

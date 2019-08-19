"use strict";
require("dotenv").config();
const bodyParser = require("body-parser");
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 5000;

// Controller for socket events
const socketController = require("./socketController");
// Routes
const chats = require("./routes/api/chats");
const users = require("./routes/api/users");
const categories = require("./routes/api/categories");

// Setup express app with socket.io
const app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.use(express.static(path.join(__dirname, "client", "build")));

// Body Parse Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// DB Config
const db = require("./config/keys").mongoURI;

// Connect to MongoDB
mongoose
	.connect(db)
	.then(() => console.log("MongoDB Connected"))
	.catch(err => console.log(err));

// Sockets Controller
socketController(io);

// Use Routes
app.use("/api/chats", chats);
app.use("/api/users", users);
app.use("/api/categories", categories);

app.get("*", (req, res) => {
	res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

const server = http.listen(PORT, () => {
	console.log("server is running on port", PORT);
});

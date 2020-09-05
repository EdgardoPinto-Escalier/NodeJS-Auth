const express = require("express");
//const morgan = require("morgan");

// Express app
const app = express();

// Register view engine
app.set("view engine", "ejs");

// Middleware and static files
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
//app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => res.render('home'));
app.get('/sandwiches', (req, res) => res.render('sandwiches'));


module.exports = app;
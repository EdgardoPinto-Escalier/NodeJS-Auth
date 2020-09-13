const express = require("express"); // Import or require Express
const authRoutes = require('./routes/authRoutes'); // Import the authRoutes
const coockieParser = require('cookie-parser');
//const morgan = require("morgan");

// Express app
const app = express();

// Register view engine
app.set("view engine", "ejs");

// Middleware and static files
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(coockieParser());
//app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => res.render('home'));
app.get('/sandwiches', (req, res) => res.render('sandwiches'));
app.use(authRoutes);

// Exports the file
module.exports = app;

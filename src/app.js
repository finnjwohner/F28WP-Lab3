const express = require("express");

// Declare the app
const app = express();

// Begin listening on either the default environment port or port 3000
const port = process.argv[2] || process.env.PORT || 3000;
const server = app.listen(port, () => {
  console.log(`Cart app listening at http://localhost:${port}`);
});

// Set the directory containing the static web files to be used
app.use(express.static("./src/public"));

// Set the views directory, otherwise it will look in the root
// directory rather than the src directory
app.set("views", "src/views");
// Set the view engine to use ejs
app.set("view engine", "ejs");

// Respond to various GET requests
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/contacts", (req, res) => {
  res.render("contacts");
});
app.get("/register", (req, res) => {
  res.render("register");
});
app.get("/login", (req, res) => {
  res.render("login");
});

const router = require("./routes/apis");
app.use(router);

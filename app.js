const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const userController = require("./src/controllers/user");
const methodOverride = require("method-override");
const ejs = require("ejs");
const app = express();
require("./src/store/db");

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/editForm", (req, res) => {
  res.render("editForm");
});

app.get('/update-user/:id', userController.renderUpdateUserPage);
app.get("/index", userController.getAllUsers);
app.post("/users", userController.createUser);
app.get('/users/:id', userController.getUserById);
app.post('/users/update/:id', userController.updateUser);
app.delete('/users/:id', userController.deleteUser);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv").config();
const userController = require("./src/controllers/user");
const ejs = require("ejs");
const app = express();
require("./src/store/db");

const PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.render("form");
});

app.get("/editForm", (req, res) => {
  res.render("editForm");
});

app.get("/index", userController.getAllUsers);
app.post("/users", userController.createUser);
app.get("/users/edit/:id", userController.getEditForm);
app.post("/users/update/:id", userController.updateUser);
app.get("/users/delete/:id", userController.deleteUser);

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
});

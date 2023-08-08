const userService = require("../services/user");

async function createUser(req, res) {
  try {
    const { firstname, lastname, username, email, password } = req.body;
    const users = await userService.createUser({
      firstname,
      lastname,
      username,
      email,
      password,
    });
    res.redirect("/index");
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user" });
  }
}

async function getAllUsers(req, res) {
  try {
    const users = await userService.getAllUsers();
    res.render("index", { users });
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users" });
  }
}

async function getUserById(req, res) {
  const userId = req.params.id;
  
  try {
    const user = await userService.getUserById(userId);
    if (!user) {
      res.status(404).json({ error: "User not found" });
    } else {
      res.render("update-user", { user: user[0] });
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(req, res) {
  const userId = req.params.id;
  const updatedUserData = req.body;

  try {
    const updatedUser = await userService.updateUser(userId, updatedUserData);
    res.redirect("/index");
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser(req, res) {
  const userId = req.params.id;

  try {
    const deletedUser = await userService.deleteUser(userId);
    res.json(deletedUser);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

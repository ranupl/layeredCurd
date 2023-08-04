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

async function getEditForm(req, res) {
  const { id } = req.params;
  try {
    let user = await userService.getUserById(id);
    user = user.length > 0 ? user[0] : undefined;
    if (user !== undefined) {
      res.render("editForm", { user });
    } else {
      res.send("Page Not Found!");
    }
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(req, res) {
  const { id } = req.params;
  const { firstname, lastname, username, email, password } = req.body;
  try {
    await userService.updateUser(
      {
        firstname,
        lastname,
        username,
        email,
        password,
      },
      id
    );
    res.redirect("/index");
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser(req, res) {
  const { id } = req.params;
  try {
    const user = await userService.deleteUser(id);
    res.redirect("/index");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getEditForm,
  updateUser,
  deleteUser,
};

const userCurd = require("../store/userCurd");

async function createUser(userData) {
  try {
    const createdUser = await userCurd.createUser(userData);
    return createdUser;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const allUsers = await userCurd.getAllUsers();
    return allUsers;
  } catch (error) {
    throw error;
  }
}

async function getUserById(id) {
  try {
    const editedUser = await userCurd.getUserById(id);
    return editedUser;
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(userData, id) {
  try {
    const updatedUser = await userCurd.updateUser(userData, id);
    return updatedUser;
  } catch (error) {
    throw error;
  }
}

async function deleteUser(id) {
  try {
    const deletedUser = await userCurd.deleteUser(id);
    return deletedUser;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
};

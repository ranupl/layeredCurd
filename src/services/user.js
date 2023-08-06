const userStore = require("../store/userStore");

async function createUser(userData) {
  try {
    const createdUser = await userStore.createUser(userData);
    return createdUser;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  try {
    const allUsers = await userStore.getAllUsers();
    return allUsers;
  } catch (error) {
    throw error;
  }
}

async function getUserById(userId) {
  try {
    const user = await userStore.getUserById(userId);
    return user;
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(userId, updatedUserData) {
  try {
    const existingUser = await userStore.getUserById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }
    const updatedUser = await userStore.updateUser(userId, updatedUserData);
    return updatedUser;
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser(userId) {
  try {
    const existingUser = await userStore.getUserById(userId);
    if (!existingUser) {
      throw new Error("User not found");
    }
    const deletedUser = await userStore.deleteUser(userId);
    return deletedUser;
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

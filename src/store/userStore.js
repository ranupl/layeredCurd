const db = require("./db");

async function createUser(userData) {
  const { firstname, lastname, username, email, password } = userData;
  const query =
    "INSERT INTO users (firstname, lastname, username, email, password) VALUES (?, ?, ?, ?, ?)";

  try {
    const results = await new Promise((resolve, reject) => {
      db.query(
        query,
        [firstname, lastname, username, email, password],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
    return results;
  } catch (error) {
    throw error;
  }
}

async function getAllUsers() {
  const query = "SELECT * FROM users";
  try {
    const queryResults = await new Promise((resolve, reject) => {
      db.query(query, (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return queryResults;
  } catch (err) {
    console.log(err);
  }
}

async function getUserById(userId) {
  const query = "SELECT * FROM users WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [userId], (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function updateUser(userId, updatedUserData) {
  const query = "UPDATE users SET ? WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [updatedUserData, userId], (err, results) => {
        if (err) {
          reject(err);
        }
        resolve(results.affectedRows > 0);
      });
    });
    return queryResult;
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser(userId) {
  const query = "DELETE FROM users WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
      db.query(query, [userId], (err, results) => {
        if (err) reject(err);
        resolve(results.affectedRows > 0);
      });
    });
    return queryResult;
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

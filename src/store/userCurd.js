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

// getAllUsers
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
    return queryResults; ///yanh par res.rnder ki jararu nhi padi kyunki url
  } catch (err) {
    console.log(err);
  }
}

// get useby ID
async function getUserById(id) {
  // const { id } = id;
  const query = "SELECT * FROM users WHERE id = ?";
  try {
    const queryResults = await new Promise((resolve, reject) => {
      db.query(query, [id], (err, result) => {
        if (err) {
          console.log(err);
        } else {
          resolve(result);
        }
      });
    });
    return queryResults;
  } catch (err) {
    console.log(err);
  }
}

// update user
async function updateUser(userData, id) {
  const { firstname, lastname, username, email, password } = userData;
  const query = "UPDATE users SET ? where id=?";
  const values = [{ firstname, lastname, username, email, password }, id];

  try {
    const queryResults = await new Promise((resolve, reject) => {
      db.query(query, values, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
          console.log(result);
        }
      });
    });
    return queryResults;
  } catch (err) {
    console.log(err);
  }
}

async function deleteUser(id) {
  const query = "DELETE FROM users WHERE id = ?";
  try {
    const queryResult = await new Promise((resolve, reject) => {
        db.query(query, id, (err, result) =>{
          if(err)
          {
            reject(err);
          }else{
            resolve(result);
          }
        })
    })
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
  deleteUser
};

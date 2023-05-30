const db = require("../db/dbConfig");


const getUser = async (id) => {
    return db.one('SELECT * FROM books WHERE user_id=$1', id)
    .then(user => {
        return user;
    })
    .catch(error => {
        return error;
      });
}



module.exports ={
    getUser
};


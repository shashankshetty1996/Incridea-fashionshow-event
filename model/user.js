const mysql = require('mysql');

module.exports.login = (username, password, callback) => {
    try {
        let sql = "SELECT * FROM users where username = "+mysql.escape(username)+" and password = "+mysql.escape(password);
        global.con.query(sql, callback);
    } catch (error) {
        console.log(error);
    }
}
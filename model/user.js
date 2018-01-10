const mysql = require('mysql');

module.exports.login = (username, password, callback) => {
    let sql = "SELECT * FROM users where username = "+mysql.escape(username)+" and password = "+mysql.escape(password)+" and flag = 1";
    global.con.query(sql, callback);
}
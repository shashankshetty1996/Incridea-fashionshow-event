const mysql = require('mysql');

module.exports.addDetails = (collegename, teamname, callback) => {
    try {
        let sql = "INSERT INTO details (college_name, team_name) VALUES (" + mysql.escape(collegename) + " , "+ mysql.escape(teamname) +")";
        global.con.query(sql, callback);
    } catch (error) {
        console.log(error);
    }
}

module.exports.addTeamID = (id, collegename, teamname, teamID, callback) => {
    try {
        let sql = "UPDATE details SET team_id = " + mysql.escape(teamID) + " WHERE college_name = " + mysql.escape(collegename) + " AND team_name = " + mysql.escape(teamname) + " AND id = " + id;
        global.con.query(sql, callback);
    } catch (error) {
        console.log(error);
    }
}
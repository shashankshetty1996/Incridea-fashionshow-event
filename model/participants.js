const mysql = require('mysql');

module.exports.addParticipants = (teamID, noparticipant, teamDetails, callback) => {
    // Array of entires for bulk insert
    let values = [];
    teamDetails.forEach(element => {
        let val = [];
        val.push(element.name);
        val.push(element.usn.toUpperCase());
        val.push(element.phone);
        val.push(element.email);
        val.push(teamID);
        values.push(val);
    });
    try {
        let sql = "INSERT INTO participant (name, usn, phone, email, team_id) VALUES ?";
        global.con.query(sql,[values], (err, result) => {
            /*
                // To assign PID //
            */
            // let i, j = 0;
            // for(i = 1; i < noparticipant; i++) {
            //     let pid = teamID + "-" + ("0" + String(i)).slice(-2);
            //     let query = "UPDATE participant SET pid = " + mysql.escape(pid) + " WHERE name = " + mysql.escape(teamDetails[j].name) + " AND usn = " + mysql.escape(teamDetails[j].usn) + " AND phone = " + mysql.escape(teamDetails[j].phone) + " AND email = " + mysql.escape(teamDetails[j].email) + " AND team_id = " + mysql.escape(teamID); 
            //     j++;
            //     global.con.query(query);
            // }
            // let pid = teamID + "-" + ("0" + String(i)).slice(-2);
            // let query = "UPDATE participant SET pid = " + mysql.escape(pid) + " WHERE name = " + mysql.escape(teamDetails[j].name) + " AND usn = " + mysql.escape(teamDetails[j].usn) + " AND phone = " + mysql.escape(teamDetails[j].phone) + " AND email = " + mysql.escape(teamDetails[j].email) + " AND team_id = " + mysql.escape(teamID);
            // global.con.query(query, callback); 



            
            let affectedRows = result.affectedRows;
            // First Tuple SI number
            let insertId = result.insertId;
            let i, j = 0;
            for(i = insertId; i < (affectedRows + insertId) - 1; i++) {
                let pid = teamID + "-" + ("0" + String(i)).slice(-2);
                let query = "UPDATE participant SET pid = " + mysql.escape(pid) + " WHERE name = " + mysql.escape(teamDetails[j].name) + " AND usn = " + mysql.escape(teamDetails[j].usn) + " AND phone = " + mysql.escape(teamDetails[j].phone) + " AND email = " + mysql.escape(teamDetails[j].email) + " AND team_id = " + mysql.escape(teamID) + " AND id = " + i; 
                j++;
                global.con.query(query);
            }
            let pid = teamID + "-" + ("0" + String(i)).slice(-2);
            let query = "UPDATE participant SET pid = " + mysql.escape(pid) + " WHERE name = " + mysql.escape(teamDetails[j].name) + " AND usn = " + mysql.escape(teamDetails[j].usn) + " AND phone = " + mysql.escape(teamDetails[j].phone) + " AND email = " + mysql.escape(teamDetails[j].email) + " AND team_id = " + mysql.escape(teamID) + " AND id = " + i;
            global.con.query(query, callback); 
        });
    } catch (error) {
       console.log(error); 
    }
}

module.exports.getListByTeamID = (teamID, callback) => {
    let sql = "SELECT name, pid FROM participant WHERE team_id = " + mysql.escape(teamID);
    global.con.query(sql, callback);
}
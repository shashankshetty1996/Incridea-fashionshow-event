const express = require('express');
const jwt = require('jsonwebtoken');

const details = require('../model/details');
const participants = require('../model/participants');

let router = express.Router();

// Adding Team Details
router.post('/details', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, AuthData) => {
        if(err) {
            res.sendStatus(403);
        }
        let collegename = req.body.collegename;
        let teamname = req.body.teamname;
        details.addDetails(collegename, teamname, (err, result) => {
            if(err) {
                res.sendStatus(403);
            }
	    console.log(err, result);
            let id = result.insertId;
            // making 2 digit number
            let code = ("0" + String(id)).slice(-2); 
            // PID format                       
            let team_id = "IN-FS-" + code;
            details.addTeamID(id, collegename, teamname, team_id, (err, AuthData) => {
                if(err) {
                    res.sendStatus(403);
                }
                res.json({team_id});
            });
        });
    });
});

// Adding Participant
router.post('/participants', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, AuthData) => {
        if(err) {
            res.sendStatus(403);
        }
        let body = req.body;
        let team_id = body.teamID;
        let noparticipant = body.noparticipant;
        let teamDetails = body.teamDetails;
        participants.addParticipants(team_id, noparticipant, teamDetails, (err, result) => {
            if(err) {
                res.sendStatus(403);
            }
            res.json(result);
        });
    });
});

// Get Participants Details
router.get('/participants/:teamID', verifyToken, (req, res) => {
    jwt.verify(req.token, 'incridea', (err, AuthData) => {
        if(err) {
            res.sendStatus(403);
        }
        let teamID = req.params.teamID;
        participants.getListByTeamID(teamID, (err, result) => {
            if(err) {
                res.sendStatus(403);
            }
            res.json(result);
        });
    });
});


function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization'];    

    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    } else {      
        res.sendStatus(403);
    }
}

module.exports = router;

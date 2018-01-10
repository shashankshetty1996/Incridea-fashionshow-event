const express = require('express');
const user = require('../model/user');
const jwt = require('jsonwebtoken');

let router = express.Router();

router.post('/', (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    user.login(username, password, (err, result) => {
        if(err) {
            res.sendStatus(403);
        } else if(result != '') { 
            // user found in the database  
            let user = result[0];
            jwt.sign({user:user.username}, 'incridea', (err, token) => {
                result[0].token = token;
                result = result[0];
                res.json(result);
            });
        } else {
            res.json({username: '', password: '', flag: 0 });
        }
    });
});

module.exports = router;
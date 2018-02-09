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
        } else if(result !== '') { 
            // user found in the database 
            try {
                jwt.sign({user:result[0].username}, 'incridea', (err, token) => {
                    result[0].token = token;
                    result = result[0];
                    res.json(result);
                });
            } catch (error) {
                res.json({username: '', password: ''});                
            } 
        } else {
            res.json({username: '', password: ''});
        }
    });
});

module.exports = router;
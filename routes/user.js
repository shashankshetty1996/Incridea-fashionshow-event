const express = require('express');
let router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome from user route');
});

router.post('/', (req, res) => {
    res.send('Welcome from user route');
});

module.exports = router;
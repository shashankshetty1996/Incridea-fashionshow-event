
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const path = require('path');
const ejs = require('ejs');

// router modules
let api = require('./routes/index');
let user = require('./routes/user');

// Creating an express app
const app = express();

// Defining node port.
const port = 5000

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Body Parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Setting up static folder
app.use('/', express.static(path.join(__dirname, 'public')));

// MySQL connection configuration
// to make connection object access global through out the node application

app.use((req, res, next) => {
    function handle() {
      var connection = mysql.createConnection({
        host: "127.0.0.1" || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_NAME || "incridea"
      });
      connection.connect(function(err) {
        if (!err) {
		setInterval(function(){connection.query("show tables")}, 2000);
	}
      });
}
handle();
next();
  });
      
// Adding routes to the express app
app.use('/api', api);
app.use('/users', user);

// Setting index route
app.get('/', (req,res) => res.render('index'));

// report page
app.get('/report', (req, res) => res.render('report'));

// Error handing
app.get('*', function(req, res, next) {
    var err = new Error();
    err.status = 404;
    next(err);
});

// handling 404 errors
app.use(function(err, req, res, next) {
    if(err.status !== 404) {
        return next();
    }
    res.send('Error something went wrong');
});

app.listen(port,"localhost", () => {
     console.log(`Started Node Server on port ${port}`);
});

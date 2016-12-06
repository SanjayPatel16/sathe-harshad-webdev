var express = require('express');
var app = express();

var bodyParser = require('body-parser');

// var passport = require('passport');
// var cookieParser = require('cookie-parser');
// var session = require('express-session');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(session({secret: process.env.SESSION_SECRET}));
// app.use(passport.initialize());
// app.use(passport.session());

// configure a public directory to host static content
app.use(express.static(__dirname + '/public'));

// require ("./test/app.js")(app);
require("./assignment/app.js")(app);
app.set('ipaddress', (process.env.IP));
app.set('port', (process.env.PORT || 3000));
app.listen(app.get('port'), app.get('ipaddress'));

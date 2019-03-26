/* jshint esversion: 6 */
const express = require('express');
const sessions = require('express-session');
const mongo = require('mongoose');
const MongoStore = require('connect-mongo')(sessions);
const app = express();
const bodyParser = require('body-parser');
const path = require('path');

// Linking to routers
const indexRouter = require('./routes/index');
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const aboutRouter = require('./routes/about');
const projectsRouter = require('./routes/projects');
const rentRouter = require('./routes/rent');
const memberRouter = require('./routes/members')

//mongodb import and url
const url = 'mongodb://localhost:27017';
//mongo connect
mongo.connect(url);
//init session framework
app.use(sessions({
  secret: 'neutron22',
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: mongo.connection,
    collection: 'session',
  })
}));

// Set html framework
app.set('view engine', 'ejs');

// setup static folder directory
app.use(express.static(path.join(__dirname, 'public')));


app.use(express.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use('/', indexRouter);
app.use('/login', loginRouter);
app.use('/register', registerRouter);
app.use('/about', aboutRouter);
app.use('/projects', projectsRouter);
app.use('/rent', rentRouter);
app.use('/members', memberRouter);

module.exports = app;

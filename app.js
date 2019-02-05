/* jshint esversion: 6 */
const express = require('express');

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

module.exports = app;

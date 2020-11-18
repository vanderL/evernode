var express = require('express');
var path = require('path');
var logger = require('morgan');
var cors =  require('cors')
require ('./config/database')

var usersRouter = require('./app/routes/users');
var notesRoutes = require('./app/routes/note')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors())

app.use('/users', usersRouter);
app.use('/notes', notesRoutes)

module.exports = app;

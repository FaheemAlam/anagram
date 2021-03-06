const express = require('express')
const router = require('./config/router')
const path = require('path')

// Create Express server
const app = express();

// Express configuration
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.use(router.router);

exports.app = app

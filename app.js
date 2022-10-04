const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));


// import routes
const test = require('./routes');

// use the route
app.use('', test);

module.exports = app;
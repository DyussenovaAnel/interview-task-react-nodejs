'use strict';
require('dotenv').config();
const
    express = require('express'),
    bodyParser = require('body-parser'),
    app = express().use(bodyParser.json()); 
    var cors = require('cors')
    app.use(cors())

app.listen(process.env.PORT , () => console.log('start'));

require('./db');
const router = require('./routes/index');

app.use("/", router);
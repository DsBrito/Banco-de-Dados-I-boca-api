'use strict';

const express = require('express');

const bodyParser = require('body-parser');
const {getUsers} = require('./queries');
// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
app.get('/', getUsers)
app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});
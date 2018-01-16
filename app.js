const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const app = express();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('app listening at ', port);
});

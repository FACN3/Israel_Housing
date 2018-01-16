const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/Property');
require('./models/Owner');
const Property = mongoose.model('property');

mongoose.connect(keys.mongoUrl);

const app = express();

app.post('/add', (req, res) => {
  const property = new Property({
    name: 'alshams',
    price: 1000000,
    location: 'nazareth',
    p_type: 'studio',
    size: 4,
  });

  property
    .save()
    .then(house => {
      res.send(house);
    })
    .catch(err => {
      res.send(err);
    });
});
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('app listening at ', port);
});

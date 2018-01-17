const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/Property');
require('./models/Owner');
const Property = mongoose.model('property');

mongoose.connect(keys.mongoUrl);

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/api/create', (req, res) => {
  const { name, price, location, p_type, imageUrl, size } = req.body;
  console.log(req.body);
  const property = new Property({
    name,
    price,
    location,
    p_type,
    imageUrl,
    size,
  });

  property
    .save()
    .then(house => {
      res.send(house);
    })
    .catch(err => {
      res.status(400).send('unable to save in the database');
    });
});

app.get('/api/fetch', (req, res) => {
  Property.find()
    .then(properties => {
      res.send(properties);
    })
    .catch(err => {
      res.status(400).send('unable to read from the database');
    });
});

app.get('/api/selected/:id', (req, res) => {
  const id = req.params.id;
  Property.findById(id)
    .then(property => {
      res.send(property);
    })
    .catch(err => {
      res.status(400).send('unable to read from the database');
    });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log('app listening at ', port);
});

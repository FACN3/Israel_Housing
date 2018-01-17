const Property = require('../models/Property');

module.exports = (req, res) => {
  Property.find()
    .then(properties => {
      res.send(properties);
    })
    .catch(err => {
      res.status(400).send('unable to read from the database');
    });
};

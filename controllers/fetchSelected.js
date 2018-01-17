const Property = require('../models/Property');

module.exports = (req, res) => {
  const id = req.params.id;
  Property.findById(id)
    .then(property => {
      res.send(property);
    })
    .catch(err => {
      res.status(400).send('unable to read from the database');
    });
};

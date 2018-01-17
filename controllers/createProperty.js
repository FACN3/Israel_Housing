const Property = require('../models/Property');

module.exports = (req, res) => {
  const { name, price, location, p_type, imageUrl, size } = req.body;
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
};

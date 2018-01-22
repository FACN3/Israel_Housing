const Property = require('../models/Property');

module.exports = (req, res) => {
  const { name, price, location, lat, lng, p_type, imageUrl, size } = req.body;
  const property = new Property({
    name,
    price,
    location,
    lat,
    lng,
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
      res.status(500).send('unable to save in the database');
    });
};

const createProperty = require('../controllers/createProperty');
const fetchAll = require('../controllers/fetchAll');
const fetchSelected = require('../controllers/fetchSelected');

module.exports = app => {
  //Add property to data base
  app.post('/api/create', createProperty);

  //Fetch all property data from the database
  app.get('/api/fetch', fetchAll);

  // Fetch single selected property by ids
  app.get('/api/selected/:id', fetchSelected);
};

const createProperty = require('../controllers/createProperty');
const fetchAll = require('../controllers/fetchAll');
const fetchSelected = require('../controllers/fetchSelected');

module.exports = app => {
  //Add property to data base
  app.post('/api/create', (req, res) => {
    createProperty(req, res);
  });

  //Fetch all property data from the database
  app.get('/api/fetch', (req, res) => {
    fetchAll(req, res);
  });

  // Fetch single selected property by id

  app.get('/api/selected/:id', (req, res) => {
    fetchSelected(id, req, res);
  });
};

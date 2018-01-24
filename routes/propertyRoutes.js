const router = require('express').Router();
const createProperty = require('../controllers/createProperty');
const fetchAll = require('../controllers/fetchAll');
const fetchSelected = require('../controllers/fetchSelected');
const requireLogin = require('../middleWares/requireLogin');

//Add property to data base
router.post('/create', requireLogin, createProperty);

//Fetch all property data from the database
router.get('/fetch', fetchAll);

// Fetch single selected property by ids
router.get('/selected/:id', fetchSelected);

module.exports = router;

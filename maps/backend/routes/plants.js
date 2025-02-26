const express = require('express');
const router = express.Router();
const plantController = require('../controllers/plants');

router.get('/', plantController.getAllPlants);

module.exports = router;
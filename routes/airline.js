// routes/airlineRoutes.js
const express = require('express');
const AirlineController = require('../controllers/airlineController');
const AirlineModel = require('../models/Airline');

const router = express.Router();
const airlineController = new AirlineController(AirlineModel);

router.get('/airlines', airlineController.getAllAirlines.bind(airlineController));
router.get('/airlines/:id', airlineController.getAirlineById.bind(airlineController));
// Resto de rutas...

module.exports = router;

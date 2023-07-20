// routes/aircraftRoutes.js
const express = require('express');
const AircraftController = require('../controllers/aircraftController');
const AircraftModel = require('../models/Aircraft');

const router = express.Router();
const aircraftController = new AircraftController(AircraftModel);

router.get('/aircrafts', aircraftController.getAllAircraft.bind(aircraftController));
router.get('/aircrafts/:id', aircraftController.getAircraftById.bind(aircraftController));
// Resto de rutas...

module.exports = router;

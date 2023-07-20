const express = require('express');
const AircraftController = require('../controllers/AircraftController');
const AircraftModel = require('../models/Aircraft');

const router = express.Router();
const aircraftController = new AircraftController(AircraftModel);

router.get('/aircrafts', aircraftController.getAllAircraft.bind(aircraftController));
router.get('/aircrafts/:id', aircraftController.getAircraftById.bind(aircraftController));
router.post('/aircrafts', aircraftController.createAircraft.bind(aircraftController));
router.put('/aircrafts/:id', aircraftController.updateAircraft.bind(aircraftController));
router.delete('/aircrafts/:id', aircraftController.deleteAircraft.bind(aircraftController));

module.exports = router;


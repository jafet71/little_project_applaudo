// routes/aircraftStateRoutes.js
const express = require('express');
const AircraftStateController = require('../controllers/aircraftStateController');
const AircraftStateModel = require('../models/AircraftState');

const router = express.Router();
const aircraftStateController = new AircraftStateController(AircraftStateModel);

router.get('/aircraftStates', aircraftStateController.getAllAircraftStates.bind(aircraftStateController));
router.get('/aircraftStates/:id', aircraftStateController.getAircraftStateById.bind(aircraftStateController));
// Resto de rutas...

module.exports = router;

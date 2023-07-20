const express = require('express');
const AircraftStateController = require('../controllers/AircraftStateController');
const AircraftStateModel = require('../models/AircraftState');

const router = express.Router();
const aircraftStateController = new AircraftStateController(AircraftStateModel);

router.get('/aircraftStates', aircraftStateController.getAllAircraftStates.bind(aircraftStateController));
router.get('/aircraftStates/:id', aircraftStateController.getAircraftStateById.bind(aircraftStateController));
router.post('/aircraftStates', aircraftStateController.createAircraftState.bind(aircraftStateController));
router.put('/aircraftStates/:id', aircraftStateController.updateAircraftState.bind(aircraftStateController));
router.delete('/aircraftStates/:id', aircraftStateController.deleteAircraftState.bind(aircraftStateController));

module.exports = router;

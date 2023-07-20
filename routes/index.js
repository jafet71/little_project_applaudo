const express = require('express');
const router = express.Router();

// Importar los controladores
const AircraftController = require('../controllers/AircraftController');
const AircraftStateController = require('../controllers/AircraftStateController');
const AirlineController = require('../controllers/AirlineController');
const BoardingGateController = require('../controllers/BoardingGateController');

// Crear instancias de los controladores
const aircraftController = new AircraftController();
const aircraftStateController = new AircraftStateController();
const airlineController = new AirlineController();
const boardingGateController = new BoardingGateController();

// Configurar las rutas
router.get('/aircrafts', aircraftController.getAllAircraft.bind(aircraftController));
router.get('/aircraftstates', aircraftStateController.getAllAircraftStates.bind(aircraftStateController));
router.get('/airlines', airlineController.getAllAirlines.bind(airlineController));
router.get('/boardinggates', boardingGateController.getAllBoardingGates.bind(boardingGateController));

// Exportar el enrutador
module.exports = router;

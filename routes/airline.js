const express = require('express');
const AirlineController = require('../controllers/AirlineController');
const AirlineModel = require('../models/Airline');

const router = express.Router();
const airlineController = new AirlineController(AirlineModel);

router.get('/airlines', airlineController.getAllAirlines.bind(airlineController));
router.get('/airlines/:id', airlineController.getAirlineById.bind(airlineController));
router.post('/airlines', airlineController.createAirline.bind(airlineController));
router.put('/airlines/:id', airlineController.updateAirline.bind(airlineController));
router.delete('/airlines/:id', airlineController.deleteAirline.bind(airlineController));

module.exports = router;


// routes/boardingGateRoutes.js
const express = require('express');
const BoardingGateController = require('../controllers/boardingGateController');
const BoardingGateModel = require('../models/BoardingGate');

const router = express.Router();
const boardingGateController = new BoardingGateController(BoardingGateModel);

router.get('/boardinggates', boardingGateController.getAllBoardingGates.bind(boardingGateController));
router.get('/boardinggates/:id', boardingGateController.getBoardingGateById.bind(boardingGateController));
// Resto de rutas...

module.exports = router;

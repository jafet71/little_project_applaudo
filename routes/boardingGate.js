const express = require('express');
const BoardingGateController = require('../controllers/BoardingGateController');
const BoardingGateModel = require('../models/BoardingGate');

const router = express.Router();
const boardingGateController = new BoardingGateController(BoardingGateModel);

router.get('/boardinggates', boardingGateController.getAllBoardingGates.bind(boardingGateController));
router.get('/boardinggates/:id', boardingGateController.getBoardingGateById.bind(boardingGateController));
router.post('/boardinggates', boardingGateController.createBoardingGate.bind(boardingGateController));
router.put('/boardinggates/:id', boardingGateController.updateBoardingGate.bind(boardingGateController));
router.delete('/boardinggates/:id', boardingGateController.deleteBoardingGate.bind(boardingGateController));

module.exports = router;

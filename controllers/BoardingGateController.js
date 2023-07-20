// controllers/boardingGateController.js
class BoardingGateController {
  constructor(boardingGateModel) {
    this.boardingGateModel = boardingGateModel;
  }

  async getAllBoardingGates(req, res) {
    try {
      const boardingGates = await this.boardingGateModel.findAll();
      res.json({
        success: true,
        data: boardingGates
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async getBoardingGateById(req, res) {
    const { id } = req.params;

    try {
      const boardingGate = await this.boardingGateModel.findByPk(id);
      if (!boardingGate) {
        return res.status(404).json({
          success: false,
          error: 'Boarding Gate not found'
        });
      }
      res.json({
        success: true,
        data: boardingGate
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async createBoardingGate(req, res) {
    const { gateNumber, availability } = req.body;

    try {
      const boardingGate = await this.boardingGateModel.create({
        gateNumber,
        availability
      });
      res.status(201).json({
        success: true,
        data: boardingGate
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async updateBoardingGate(req, res) {
    const { id } = req.params;
    const { gateNumber, availability } = req.body;

    try {
      const boardingGate = await this.boardingGateModel.findByPk(id);
      if (!boardingGate) {
        return res.status(404).json({
          success: false,
          error: 'Boarding Gate not found'
        });
      }
      boardingGate.gateNumber = gateNumber;
      boardingGate.availability = availability;
      await boardingGate.save();

      res.json({
        success: true,
        data: boardingGate
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async deleteBoardingGate(req, res) {
    const { id } = req.params;

    try {
      const boardingGate = await this.boardingGateModel.findByPk(id);
      if (!boardingGate) {
        return res.status(404).json({
          success: false,
          error: 'Boarding Gate not found'
        });
      }
      await boardingGate.destroy();

      res.json({
        success: true,
        message: 'Boarding Gate deleted successfully'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }
}

module.exports = BoardingGateController;

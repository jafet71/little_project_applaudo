class AircraftStateController {
  constructor(aircraftStateModel) {
    this.aircraftStateModel = aircraftStateModel;
  }

  async getAllAircraftStates(req, res) {
    try {
      const aircraftStates = await this.aircraftStateModel.findAll();
      res.json({
        success: true,
        data: aircraftStates
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async getAircraftStateById(req, res) {
    const { id } = req.params;

    try {
      const aircraftState = await this.aircraftStateModel.findByPk(id);
      if (!aircraftState) {
        return res.status(404).json({
          success: false,
          error: 'Aircraft State not found'
        });
      }
      res.json({
        success: true,
        data: aircraftState
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async createAircraftState(req, res) {
    const { name } = req.body;

    try {
      const aircraftState = await this.aircraftStateModel.create({
        name
      });
      res.status(201).json({
        success: true,
        data: aircraftState
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async updateAircraftState(req, res) {
    const { id } = req.params;
    const { name } = req.body;

    try {
      const aircraftState = await this.aircraftStateModel.findByPk(id);
      if (!aircraftState) {
        return res.status(404).json({
          success: false,
          error: 'Aircraft State not found'
        });
      }
      aircraftState.name = name;
      await aircraftState.save();

      res.json({
        success: true,
        data: aircraftState
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async deleteAircraftState(req, res) {
    const { id } = req.params;

    try {
      const aircraftState = await this.aircraftStateModel.findByPk(id);
      if (!aircraftState) {
        return res.status(404).json({
          success: false,
          error: 'Aircraft State not found'
        });
      }

      //Actualización
      aircraftState.name = 'no disponible';
      await aircraftState.save();

      res.json({
        success: true,
        message: 'Aircraft State updated to "no disponible"'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }
}

module.exports = AircraftStateController;
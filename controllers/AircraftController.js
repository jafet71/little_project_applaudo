// controllers/aircraftController.js
class AircraftController {
  constructor(aircraftModel) {
    this.aircraftModel = aircraftModel;
  }

  async getAllAircraft(req, res) {
    try {
      const aircraft = await this.aircraftModel.findAll();
      res.json({
        success: true,
        data: aircraft
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async getAircraftById(req, res) {
    const { id } = req.params;

    try {
      const aircraft = await this.aircraftModel.findByPk(id);
      if (!aircraft) {
        return res.status(404).json({
          success: false,
          error: 'Aircraft not found'
        });
      }
      res.json({
        success: true,
        data: aircraft
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  // Resto de métodos para crear, actualizar y eliminar un avión...
}

module.exports = AircraftController;

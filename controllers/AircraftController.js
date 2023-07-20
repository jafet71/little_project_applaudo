// controllers/aircraftController.js
class AircraftController {
  constructor(aircraftModel) {
    this.aircraftModel = aircraftModel;
  }

  // ... Métodos existentes: getAllAircraft, getAircraftById, createAircraft y updateAircraft

  async deleteAircraft(req, res) {
    const { id } = req.params;

    try {
      const aircraft = await this.aircraftModel.findByPk(id);
      if (!aircraft) {
        return res.status(404).json({
          success: false,
          error: 'Aircraft not found'
        });
      }

      // En lugar de eliminar el avión, actualizamos su estado a "no disponible"
      aircraft.state_id = 'no disponible';
      await aircraft.save();

      res.json({
        success: true,
        message: 'Aircraft state updated to "no disponible"'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }
}

module.exports = AircraftController;

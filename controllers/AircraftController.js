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

  async createAircraft(req, res) {
    const { registrationNumber, airline_id, passengerCapacity, state_id } = req.body;

    try {
      const aircraft = await this.aircraftModel.create({
        registrationNumber,
        airline_id,
        passengerCapacity,
        state_id
      });
      res.status(201).json({
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

  async updateAircraft(req, res) {
    const { id } = req.params;
    const { registrationNumber, airline_id, passengerCapacity, state_id } = req.body;

    try {
      const aircraft = await this.aircraftModel.findByPk(id);
      if (!aircraft) {
        return res.status(404).json({
          success: false,
          error: 'Aircraft not found'
        });
      }
      aircraft.registrationNumber = registrationNumber;
      aircraft.airline_id = airline_id;
      aircraft.passengerCapacity = passengerCapacity;
      aircraft.state_id = state_id;
      await aircraft.save();

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

      // Actualización
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
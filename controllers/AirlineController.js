class AirlineController {
  constructor(airlineModel) {
    this.airlineModel = airlineModel;
  }

  async getAllAirlines(req, res) {
    try {
      const airlines = await this.airlineModel.findAll();
      res.json({
        success: true,
        data: airlines
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async getAirlineById(req, res) {
    const { id } = req.params;

    try {
      const airline = await this.airlineModel.findByPk(id);
      if (!airline) {
        return res.status(404).json({
          success: false,
          error: 'Airline not found'
        });
      }
      res.json({
        success: true,
        data: airline
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async createAirline(req, res) {
    const { name, country } = req.body;

    try {
      const airline = await this.airlineModel.create({
        name,
        country
      });
      res.status(201).json({
        success: true,
        data: airline
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async updateAirline(req, res) {
    const { id } = req.params;
    const { name, country } = req.body;

    try {
      const airline = await this.airlineModel.findByPk(id);
      if (!airline) {
        return res.status(404).json({
          success: false,
          error: 'Airline not found'
        });
      }
      airline.name = name;
      airline.country = country;
      await airline.save();

      res.json({
        success: true,
        data: airline
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }

  async deleteAirline(req, res) {
    const { id } = req.params;

    try {
      const airline = await this.airlineModel.findByPk(id);
      if (!airline) {
        return res.status(404).json({
          success: false,
          error: 'Airline not found'
        });
      }

      //Actualización
      airline.isActive = false;
      await airline.save();

      res.json({
        success: true,
        message: 'Airline status updated to inactive'
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        error: 'Internal Server Error'
      });
    }
  }
}

module.exports = AirlineController;
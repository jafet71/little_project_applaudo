
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class BoardingGate extends Model {}

BoardingGate.init(
  {
    gateNumber: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    availability: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true, // Inicia en "activa"
    },
  },
  {
    sequelize,
    modelName: 'BoardingGate',
  }
);

module.exports = BoardingGate;

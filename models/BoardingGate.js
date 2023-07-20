const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/conectiondb');

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
      defaultValue: true, //Inicializa en "activa"
    },
  },
  {
    sequelize,
    modelName: 'BoardingGate',
  }
);

module.exports = BoardingGate;

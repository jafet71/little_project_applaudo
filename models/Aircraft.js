const { DataTypes } = require('sequelize');
const sequelize = require('../config/conectiondb');
const Airline = require('./Airline');
const AircraftState = require('./AircraftState');

const Aircraft = sequelize.define('Aircraft', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  registrationNumber: {
    type: DataTypes.STRING(20),
    allowNull: false
  },
  passengerCapacity: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'Aircraft',
  timestamps: false
});

Aircraft.belongsTo(Airline, { foreignKey: 'airline_id' });
Aircraft.belongsTo(AircraftState, { foreignKey: 'state_id' });

module.exports = Aircraft;
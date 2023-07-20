const { DataTypes } = require('sequelize');
const sequelize = require('../config/conectiondb');

const AircraftState = sequelize.define('AircraftState', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'AircraftState',
  timestamps: false
});

module.exports = AircraftState;
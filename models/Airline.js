const { DataTypes } = require('sequelize');
const sequelize = require('../config/conectiondb');

const Airline = sequelize.define('Airline', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  country: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'Airline',
  timestamps: false
});

module.exports = Airline;

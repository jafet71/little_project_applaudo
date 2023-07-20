const { DataTypes } = require('sequelize');
const sequelize = require('../config/conectiondb');

const BoardingGate = sequelize.define('BoardingGate', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  gateNumber: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  availability: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  }
}, {
  tableName: 'BoardingGate',
  timestamps: false
});

module.exports = BoardingGate;

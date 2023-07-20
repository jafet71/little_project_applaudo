const Sequelize = require('sequelize');

const connection = new Sequelize(
    'aircraftmanager',
    'root',
    '',
{
    host: 'localhost',
    dialect: 'mysql'
}
);

module.exports = connection;
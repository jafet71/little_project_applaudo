const express = require('express');
const db = require('./config/conectiondb');
const aircraftRoutes = require('./routes/aircraft');
const airlineRoutes = require('./routes/airline');
const boardingGateRoutes = require('./routes/boardingGate');
const aircraftStateRoutes = require('./routes/aircraftState');
const bodyParser = require('body-parser');

const app = express();
const PORT = 8080;

// Conexión a la base de datos
db.authenticate()
  .then(() => {
    console.log('Conexión establecida correctamente');
  })
  .catch((err) => {
    console.error('Error al conectar con la base de datos:', err);
  });

// Middleware para manejar el body en formato JSON
// app.use(express.json());
app.use(bodyParser.json());

// Rutas
app.use('/api', aircraftRoutes);
app.use('/api', airlineRoutes);
app.use('/api', boardingGateRoutes);
app.use('/api', aircraftStateRoutes);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
import React from 'react';

const AircraftTable = ({ aircraft, handleEdit, handleDelete }) => {
  return (
    <div className="mb-4">
      <h2 className="text-center">Aircraft</h2>
      <table className="table table-bordered table-hover">
        <thead className="table-primary">
          <tr>
            <th>ID</th>
            <th>Registration Number</th>
            <th>Airline ID</th>
            <th>Passenger Capacity</th>
            <th>State ID</th>
            <th>Gateway</th> {/* Agregamos la columna para el estado del Gateway */}
          </tr>
        </thead>
        <tbody>
          {aircraft.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.registrationNumber}</td>
              <td>{item.airline_id}</td>
              <td>{item.passengerCapacity}</td>
              <td>{item.state_id}</td>
              <td>{item.gateway}</td> {/* Mostramos el estado del Gateway */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AircraftTable;

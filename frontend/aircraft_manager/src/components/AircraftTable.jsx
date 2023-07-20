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
            <th>Actions</th>
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
              <td>
                <button
                  className="btn btn-danger mx-1"
                  onClick={() => handleDelete(item.id)}
                >
                  Delete
                </button>
                <button
                  className="btn btn-info mx-1"
                  onClick={() => handleEdit(item)}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AircraftTable;

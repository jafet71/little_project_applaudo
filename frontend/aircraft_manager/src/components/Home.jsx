import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [aircraft, setAircraft] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/api/aircrafts'); // Actualización aquí
      setAircraft(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (type, id) => {
    try {
      await axios.delete(`http://localhost:8080/api/${type}/${id}`);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Home</h1>
      <h2>Aircraft</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
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
                  onClick={() => handleDelete('aircraft', item.id)}
                >
                  Delete
                </button>
                <button className="btn btn-info mx-1">Edit</button>
                <button className="btn btn-warning mx-1">Update State</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;

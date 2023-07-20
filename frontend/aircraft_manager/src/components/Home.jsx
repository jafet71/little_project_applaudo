import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AircraftTable from './AircraftTable';
import AddAircraftForm from './AddAircraftForm';
import EditAircraftForm from './EditAircraftForm';
import BoardingGateAssign from './BoardingGateAssign';

const Home = () => {
  const [aircraft, setAircraft] = useState([]);
  const [boardingGates, setBoardingGates] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const aircraftData = await axios.get('http://localhost:8080/api/aircrafts');
      setAircraft(aircraftData.data.data);

      const boardingGatesData = await axios.get('http://localhost:8080/api/boardinggates');
      setBoardingGates(boardingGatesData.data.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  const handleAddAircraft = async (formData) => {
    try {
      await axios.post('http://localhost:8080/api/aircrafts', formData);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAircraft = async (id, formData) => {
    try {
      await axios.put(`http://localhost:8080/api/aircrafts/${id}`, formData);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteAircraft = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/aircrafts/${id}`);
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleAssignGate = async (aircraftId, gateId) => {
    try {
      await axios.put(`http://localhost:8080/api/aircrafts/${aircraftId}/assign-gate`, {
        gateId: gateId
      });
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Aircraft Manager</h1>
      <AircraftTable
        aircraft={aircraft}
        handleEdit={handleUpdateAircraft}
        handleDelete={handleDeleteAircraft}
      />
      <AddAircraftForm addAircraft={handleAddAircraft} />
      <EditAircraftForm aircraft={aircraft[0]} updateAircraft={handleUpdateAircraft} />
      <BoardingGateAssign
        aircraft={aircraft[0]}
        boardingGates={boardingGates}
        assignGate={handleAssignGate}
      />
    </div>
  );
};

export default Home;

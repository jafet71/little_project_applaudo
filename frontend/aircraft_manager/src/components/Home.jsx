import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AircraftTable from './AircraftTable';
import AddAircraftForm from './AddAircraftForm';
import EditAircraftForm from './EditAircraftForm';
import BoardingGateAssign from './BoardingGateAssign';
import { Pagination } from 'react-bootstrap';
import '../components/style.css';

const Home = () => {
  const [aircraft, setAircraft] = useState([]);
  const [boardingGates, setBoardingGates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('aircraftTable');
  const [currentPage, setCurrentPage] = useState(1);
  const [aircraftPerPage] = useState(10);

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
      setActiveTab('aircraftTable');
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleUpdateAircraft = async (id, formData) => {
    try {
      await axios.put(`http://localhost:8080/api/aircrafts/${id}`, formData);
      setActiveTab('aircraftTable');
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
      setActiveTab('aircraftTable');
      loadData();
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const indexOfLastAircraft = currentPage * aircraftPerPage;
  const indexOfFirstAircraft = indexOfLastAircraft - aircraftPerPage;
  const currentAircrafts = aircraft.slice(indexOfFirstAircraft, indexOfLastAircraft);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-5">
      <h1 className="mb-4 text-center">Aircraft Manager</h1>
      <div className="d-flex justify-content-center mb-4">
      <button className={`btn btn-primary me-2 ${activeTab === 'aircraftTable' && 'active'}`} onClick={() => setActiveTab('aircraftTable')}>
          Aircraft Table
        </button>
        <button className={`btn btn-primary me-2 ${activeTab === 'addAircraftForm' && 'active'}`} onClick={() => setActiveTab('addAircraftForm')}>
          Add Aircraft Form
        </button>
        <button className={`btn btn-primary me-2 ${activeTab === 'editAircraftForm' && 'active'}`} onClick={() => setActiveTab('editAircraftForm')}>
          Edit Aircraft Form
        </button>
        <button className={`btn btn-primary ${activeTab === 'boardingGateAssign' && 'active'}`} onClick={() => setActiveTab('boardingGateAssign')}>
          Boarding Gate Assign
        </button>
      </div>
      <AircraftTable
        aircraft={currentAircrafts}
        handleEdit={handleUpdateAircraft}
        handleDelete={handleDeleteAircraft}
      />
      <Pagination className="d-flex justify-content-center">
        {Array.from({ length: Math.ceil(aircraft.length / aircraftPerPage) }, (_, index) => (
          <Pagination.Item
            key={index + 1}
            active={index + 1 === currentPage}
            onClick={() => paginate(index + 1)}
          >
            {index + 1}
          </Pagination.Item>
        ))}
      </Pagination>
      {activeTab === 'addAircraftForm' && (
        <AddAircraftForm addAircraft={handleAddAircraft} />
      )}
      {activeTab === 'editAircraftForm' && (
        <EditAircraftForm aircraft={currentAircrafts[0]} updateAircraft={handleUpdateAircraft} />
      )}
      {activeTab === 'boardingGateAssign' && (
        <BoardingGateAssign
          aircraft={currentAircrafts[0]}
          boardingGates={boardingGates}
          assignGate={handleAssignGate}
        />
      )}
    </div>
  );
};

export default Home;

// src/components/Home.js
import React, { useState } from 'react';
import axios from 'axios';

const Home = () => {
  const [searchId, setSearchId] = useState('');
  const [result, setResult] = useState(null);

  const handleSearch = async (controller) => {
    try {
      const response = await axios.get(`/api/${controller}/${searchId}`);
      setResult(response.data.data);
    } catch (error) {
      console.error(error);
      setResult(null);
    }
  };

  const handleClearResult = () => {
    setResult(null);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Search by ID"
              value={searchId}
              onChange={(e) => setSearchId(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => handleSearch('aircraft')}
              >
                Search Aircraft
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => handleSearch('aircraftstate')}
              >
                Search Aircraft State
              </button>
              <button
                className="btn btn-outline-primary"
                type="button"
                onClick={() => handleSearch('airline')}
              >
                Search Airline
              </button>
            </div>
          </div>
          {result && (
            <div className="alert alert-success">
              <button type="button" className="close" onClick={handleClearResult}>
                &times;
              </button>
              <pre>{JSON.stringify(result, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;


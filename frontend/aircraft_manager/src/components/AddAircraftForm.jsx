import React, { useState } from 'react';

const AddAircraftForm = ({ addAircraft }) => {
  const [formData, setFormData] = useState({
    registrationNumber: '',
    airline_id: '',
    passengerCapacity: '',
    state_id: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addAircraft(formData);
    setFormData({
      registrationNumber: '',
      airline_id: '',
      passengerCapacity: '',
      state_id: ''
    });
  };

  return (
    <div>
      <h2>Add Aircraft</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="registrationNumber" className="form-label">
            Registration Number
          </label>
          <input
            type="text"
            className="form-control"
            id="registrationNumber"
            name="registrationNumber"
            value={formData.registrationNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="airline_id" className="form-label">
            Airline ID
          </label>
          <input
            type="text"
            className="form-control"
            id="airline_id"
            name="airline_id"
            value={formData.airline_id}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="passengerCapacity" className="form-label">
            Passenger Capacity
          </label>
          <input
            type="number"
            className="form-control"
            id="passengerCapacity"
            name="passengerCapacity"
            value={formData.passengerCapacity}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="state_id" className="form-label">
            State ID
          </label>
          <input
            type="text"
            className="form-control"
            id="state_id"
            name="state_id"
            value={formData.state_id}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Aircraft
        </button>
      </form>
    </div>
  );
};

export default AddAircraftForm;

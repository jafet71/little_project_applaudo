import React, { useState } from 'react';

const BoardingGateAssign = ({ aircraft, boardingGates, assignGate }) => {
  const [selectedGate, setSelectedGate] = useState('');

  const handleChange = (e) => {
    setSelectedGate(e.target.value);
  };

  const handleAssignGate = () => {
    assignGate(selectedGate);
    setSelectedGate('');
  };

  return (
    <div>
      <h2>Boarding Gate Assignment</h2>
      <div className="mb-3">
        <label htmlFor="gateSelect" className="form-label">
          Select a Gate
        </label>
        <select
          className="form-select"
          id="gateSelect"
          value={selectedGate}
          onChange={handleChange}
        >
          <option value="">Select a gate...</option>
          {boardingGates.map((gate) => (
            <option key={gate.id} value={gate.id}>
              {gate.gateNumber}
            </option>
          ))}
        </select>
      </div>
      <button
        type="button"
        className="btn btn-primary"
        onClick={handleAssignGate}
        disabled={!selectedGate}
      >
        Assign to Gate
      </button>
    </div>
  );
};

export default BoardingGateAssign;

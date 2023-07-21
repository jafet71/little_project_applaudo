import React, { useState } from 'react';

const BoardingGateAssign = ({ aircraft, boardingGates, assignGate }) => {
  const [selectedGateId, setSelectedGateId] = useState('');

  const handleAssignGate = () => {
    assignGate(aircraft.id, selectedGateId);
  };

  return (
    <div>
      <h2>Boarding Gate Assign</h2>
      <select
        className="form-select mb-3"
        onChange={(e) => setSelectedGateId(e.target.value)}
        value={selectedGateId}
      >
        <option value="">Select a Gate</option>
        {Array.isArray(boardingGates) && boardingGates.length > 0 ? (
          boardingGates.map((gate) => (
            <option key={gate.id} value={gate.id}>
              {gate.name}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No gates available
          </option>
        )}
      </select>
      <button
        className="btn btn-primary"
        onClick={handleAssignGate}
        disabled={!selectedGateId}
      >
        Assign Gate
      </button>
    </div>
  );
};

export default BoardingGateAssign;

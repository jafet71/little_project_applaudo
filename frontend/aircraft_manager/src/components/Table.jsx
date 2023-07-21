import React from 'react';

const Table = ({ data, columns }) => {
  return (
    <div className="container mt-4">
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            {columns.map((column) => (
              <th key={column.key}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              {columns.map((column) => (
                <td key={column.key}>{item[column.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

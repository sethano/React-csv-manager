import React, { useState } from 'react';

const DataTable = ({ csv }) => {
  const [editing, setEditing] = useState();
  
  if (!csv) {
    return null;
  }

  // const handleClick = (event) => {
  //   const edited = setEditLocal(event.target.value);
  //   return edited;
  // }

  return (
    <div>
        <input
      type='text'
      value={editing}
      onChange={(event) => setEditing(event.target.value)}
    />
      <table>
        <thead>
          <tr>
              <th> Id </th>
              <th> Nome </th>
              <th> Telefone </th>
          </tr>
        </thead>
        <tbody>
          {csv.data.map((row, index) => (
            <tr key={index} >
              {row.map((col) => (
                <td
                  key={col}
                >{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
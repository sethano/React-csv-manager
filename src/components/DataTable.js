import React, { useEffect, useState } from 'react';
import './dataTable.css'
import TableCellBuilder from './TableCellBuilder';

const DataTable = ({ csv }) => {
  useEffect(() => {
    tableBodyBuilder(csv);
  }, [csv]);

  const tableBodyBuilder = (csv) => {
    return (
      csv.data.map((row, index) => (
        <tr key={index} >
          {row.map((col, index) => (
            <TableCellBuilder col={col} key={index} />
          ))} 
        </tr>
      ))
    )
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
              <th> Id </th>
              <th> Nome </th>
              <th> Telefone </th>
          </tr>
        </thead>
        <tbody>
          { csv ? tableBodyBuilder(csv) : null}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
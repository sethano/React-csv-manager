import React, { useState } from "react";

function TableCellBuilder({ col }) {
  const [data, setData] = useState(col)

  const handleChange = (event) => {
    event.preventDefault();
    setData(event.target.value)
  }

  return (
    <td
      key={col}
    >
      <input
        type='text' 
        id={col}
        name={col}
        value={ data }
        onChange={ (e) => handleChange(e) }
      >
      </input>
      </td>
  )
}

export default TableCellBuilder;
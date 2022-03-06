import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import DataTable from './components/DataTable';
import parseCsv from './utils/parseCsv'
import { useDropzone } from 'react-dropzone';


function App() {
  const [csv, setCsv] = useState();

  const onDrop = useCallback(acceptedFiles => {
    //ajuda no reader de :https://codesandbox.io/s/react-dropzone-with-hooks-and-csv-parsing-hteid?file=/src/index.js
    const reader = new FileReader();
    reader.onload = () => {
      setCsv(parseCsv(reader.result))
    };
    acceptedFiles.forEach(file => reader.readAsBinaryString(file));
  }, []);

  const { getRootProps, getInputProps, isDragAccept, isDragReject, isDragActive } = useDropzone({
    onDrop,
    accept: 'text/csv',
  })

  useEffect(() => {
    fetch('/csvExample.csv')
      .then((res) => res.text())
      .then((text) => {
        setCsv(parseCsv(text));
    });
  }, [])
  
  return (
    <div className="App">
      <h1> React CSV Reader </h1> 
      <DataTable csv={ csv }/>
      <div className={`dropzone
      ${isDragAccept && 'dropzoneAccept'}
      ${isDragReject && 'dropzoneReject'}`}
      {...getRootProps()}>
        <input
        accept=".csv"
        type="file"
        tabIndex="-1"
        {...getInputProps()}
        />
        { isDragActive ?
        <p> Solte aqui o arquivo!</p>:
        <p>Araste o arquivo aqui!</p>
        }
        <em>(somente arquivos do tipo .csv)</em>
      </div>
    </div>
  );
}

export default App;

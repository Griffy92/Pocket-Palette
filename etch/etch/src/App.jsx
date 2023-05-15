import React, { useState } from 'react'
import "./Reset.css";
import './App.css';

import Sidebar from './components/Sidebar';
import Grid from './components/Grid';

function App() {
  const [sideLength, setSideLength] = useState(10)
  function changeGrid(sideLength) {
    setSideLength(sideLength)
  }
  return (
    <div className="App">
      <div id="main-container">
        <div>
          <Sidebar changeGrid={changeGrid}/>
        </div>
        <div>
          <Grid sideLength={sideLength}/>
        </div>
        
      </div>
      
    </div>
  );
}

export default App;
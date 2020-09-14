import React, { useState, useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Graph from './components/Graph';
import CustomSlider from './components/Slider';
import GraphValue from './components/GraphValue';

function App() {

  const [value, setValue] = useState(10);

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <div className="App">
      <div className="GraphData">
        <CustomSlider value={value} onChange={handleChange}/>
        <GraphValue value={value}/>
      </div>
      <Graph value={value}/>
    </div>
  );
}

export default App;

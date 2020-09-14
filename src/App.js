import React, { useState, useCallback, useEffect } from 'react';
import logo from './logo.svg';
import './styles/App.css';

import Graph from './components/Graph';
import CustomSlider from './components/Slider';

function App() {

  const [value, setValue] = useState(10);

  function handleChange(newValue) {
    setValue(newValue);
  }

  return (
    <div className="App">
      <CustomSlider value={value} onChange={handleChange}/>
      <Graph value={value}/>
    </div>
  );
}

export default App;

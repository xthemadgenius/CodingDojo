import React from 'react';
import './App.css';

import Pokemon from './components/Pokemon';
import SWars from './components/SWars';
import Time from './components/Time';

function App() {
  return (
    <div className="App">
      <Pokemon/>
      <SWars/>
      <Time/>
    </div>
  );
}

export default App;

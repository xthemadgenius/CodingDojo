import React, { useState } from 'react';
import './App.css';
import BoxMaker from './components/BoxMaker';

function App() {
  return (
    <div className="App">
      <h1>Lets Make some Boxes</h1>
      <p>pick a color and size you want the box to be</p>
      <BoxMaker/>
    </div>
  );
}

export default App;

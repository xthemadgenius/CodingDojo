import React from 'react';
import './App.css';
import BigInversion from './components/BigInversion'

function App() {
  return (
    <div className="App">
      <BigInversion firstName="Bob" lastName="Sagot" age="43" hairColor="Black"/>
      <BigInversion firstName="Romney" lastName="Mit" age="53" hairColor="Gray"/>
      <BigInversion firstName="Trump" lastName="Donald" age="64" hairColor="Blonde"/>
      <BigInversion firstName="Fish" lastName="Moon" age="22" hairColor="Rainbow"/>
    </div>
  );
}

export default App;

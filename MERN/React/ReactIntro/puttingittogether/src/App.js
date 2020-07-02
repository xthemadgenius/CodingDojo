import React from 'react';
import './App.css';
import MakeButton from './components/MakeButton';

function App() {
  return (
    <div className="App">
      <MakeButton firstName="Steve" lastName="Tyler" age={45} hairColor="Gold" />
      <MakeButton firstName="Bob" lastName="Ross" age={67} hairColor="Red" />
      <MakeButton firstName="Mark" lastName="Zuckerberg" age={34} hairColor="Brown" />
      <MakeButton firstName="Mark" lastName="Cuban" age={67} hairColor="Black" />
    </div>
  );
}

export default App;

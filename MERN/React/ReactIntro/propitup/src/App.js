import React from 'react';
import './App.css';
import PropItUp from './components/PropItUp';

function App() {
  return (
    <div className="App">
      <PropItUp firstName="Rodney" lastName="Fonzi" age="54" hairColor="Black"/>
      <PropItUp firstName="Aaron" lastName="Carter" age="32" hairColor="Blonde"/>
      <PropItUp firstName="Leaf" lastName="Poke" age="21" hairColor="Green"/>
      <PropItUp firstName="Elon" lastName="Musk" age="49" hairColor="Brown"/>
    </div>
  );
}

export default App;

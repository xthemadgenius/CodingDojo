import React from 'react';
import './App.css';
import {Rounter, Link} from '@reach/router';

function App() {
  return (
    <div className="App">
      <div>
        <Link to = "/dashboard">Dashboard</Link> 
        <Link to = "/login">Login</Link>
      </div>
    </div>
  );
}

export default App;

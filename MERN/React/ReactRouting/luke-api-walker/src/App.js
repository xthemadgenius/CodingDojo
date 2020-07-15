import React from 'react';
import './App.css';
import {Router} from '@reach/router';
import Searchbar from './components/Searchbar';
import Errors from './components/Errors';
import People from './views/People';

function App() {
  return (
    <div className="App">
      <Searchbar/>
      <Router>
          <People path="/people/:id"/>
          {/* <Errors path="/error/"/> */}
      </Router>

      <People/>
    </div>
  );
}

export default App;

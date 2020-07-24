import React from 'react';
import './App.css';
import { Router } from '@reach/router';
import PetDashboard from './views/PetDashboard';
import AddPet from './views/AddPet';
import PetDetail from './views/PetDetail';
import EditPet from './views/EditPet';

function App() {
  return (
    <div className="App">
      <Router>
        <PetDashboard path="/"/>
        <AddPet path="/pets/new"/>
        <PetDetail path="/pets/:id"/>
        <EditPet path="/pets/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

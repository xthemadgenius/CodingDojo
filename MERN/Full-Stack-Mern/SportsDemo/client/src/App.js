import React from 'react';
import {Router} from '@reach/router';
import './App.css';
import IndexView from './views/IndexView';
import CreateView from './views/CreateView';
import DetailView from './views/DetailView';
import UpdateView from './views/UpdateView';

function App() {
  return (
    <div className="App">
      <Router>
        <IndexView path="/"/>
        <CreateView path="/create"/>
        <DetailView path="/:id"/>
        <UpdateView path="/:id/edit"/>
      </Router>
    </div>
  );
}

export default App;

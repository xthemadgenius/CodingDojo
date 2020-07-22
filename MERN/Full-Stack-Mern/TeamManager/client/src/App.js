import React, {useState} from 'react';
import {Router, Link} from '@reach/router';
import './App.css';
import axios from 'axios';
import PlayerList from './components/PlayerList';
import AddPlayer from './components/AddPlayer';
import GameStatus from './components/GameStatus'

function App() {
  const [player, setPlayer] = useState([]);
  return (
    <div className="App">
      <div>
          <Link to="/players/list"><h2>Manage Players</h2></Link>
          <h2> | </h2>
          <Link to="/status/game/1"><h2>Manage Player Status</h2></Link>
      </div>
      <Router>
        <PlayerList path="players/list" player={player} setPlayer={setPlayer}/>
        <AddPlayer path="players/addplayer" player={player} setPlayer={setPlayer}/>
        <GameStatus path="/status/game/:gameId" player={player} setPlayer={setPlayer}/>
      </Router>
    </div>
  );
}

export default App;

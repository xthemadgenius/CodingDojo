import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonBar from './ButtonBar';
import {Link} from '@reach/router';

export default props => {
    const {player, setPlayer, gameId} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => setPlayer(res.data));
    }, [])
    return (
        <div>
            <h1>Player Status - Game {gameId}</h1>
            <div>
                <Link to="/status/game/1"><h3>Game1</h3></Link>
                <h3> | </h3>
                <Link to="/status/game/2"><h3>Game 2</h3></Link>
                <h3> | </h3>
                <Link to="/status/game/3"><h3>AGame 3</h3></Link>
            </div>
        </div>
    )
}
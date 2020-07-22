import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ButtonBar from './ButtonBar';
import '../styles/PlayerTable.module.css'
import GameHead from './GameHead';

export default props => {
    const {player, setPlayer, gameId} = props;

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => setPlayer(res.data));
    }, [])
    return (
        <div>
            <h1>Player Status - Game {gameId}</h1>
            <GameHead/>
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td><h2>Players</h2></td>
                            <td><h2>Actions</h2></td>
                        </tr>
                        {player.map((play, idx) => 
                            <tr key={idx}>
                                <td>{play.name}</td>
                                <td>
                                    <ButtonBar playerId={play._id} gameId={gameId}/>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
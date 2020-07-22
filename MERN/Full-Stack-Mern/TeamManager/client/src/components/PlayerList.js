import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteBtn from './DeleteBtn';

export default props => {
    const {player, setPlayer} = props;

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => setPlayer(res.data))
    }, [])

    const removeFromDom = (playerId) => {
        setPlayer(player.filter(players => player._id !== playerId))
    }

    return (
        <div>
            <div>
                <Link to="/players/list"><h3>List</h3></Link>
                <h3> | </h3>
                <Link to="/players/addplayer"><h3>Add Player</h3></Link>
            </div>
            <table>
                <tbody>
                    <tr>
                        <th>Players</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                    {player.map((players,idx) => {
                        return (
                            <tr key={idx}>
                                <th>{players.name}</th>
                                <th>{players.position}</th>
                                <th><DeleteBtn playerId={player._id} successCallback={() => removeFromDom(player._id)}/></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
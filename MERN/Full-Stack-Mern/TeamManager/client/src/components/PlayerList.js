import React, {useState,useEffect} from 'react';
import axios from axios;
import {Link} from '@reach/router';
import playerRoutes from '../../../server/routes/player.routes';

export default props => {
    const {player, setPlayer} = props;
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/player`)
        .then(res => setPlayer(res.data))
    }, [])

    return (
        <div>
            <div>
                <Link to="player/list"><h3>List</h3></Link>
                <h3> | </h3>
                <Link to="player/new"><h3>Add Player</h3></Link>
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
                                <th></th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
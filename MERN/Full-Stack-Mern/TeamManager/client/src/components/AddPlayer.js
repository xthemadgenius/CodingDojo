import React, {useState, useEffect} from 'react';
import {Link, navigate} from '@reach/router';
import axios from 'axios';
import PlayerForm from './PlayerForm';

export default props => {
    const {player, setPlayer} = props;
    const [errors, setErrors] = useState([]);

    const [newPlayer, setNewPlayer] = useState({
        name: "",
        position: "",
        status: {
            game1: 0,
            game2: 0,
            game3: 0,
        }
    });

    const addNewPlayer = (newPlayerz) => {
        axios.post(`http://localhost:8000/api/player`, newPlayerz)
        .then(res => {
            setPlayer([
                ...player,
                res.data,
                navigate(`/players/list`)
            ])
        })
        .catch(err => {
            const errorRes = err.response.data.errors;
            const errorArr =[];
            for(var key of Object.keys(errorRes)){
                errorArr.push(errorRes[key].message)
            }
            setErrors(errorArr)
        })
    }

    return (
        <div>
            <div>
                <Link to="/players/list"><h3>List</h3></Link>
                <h3> | </h3>
                <Link to="/players/addplayer"><h3>Add Player</h3></Link>
            </div>
            <div>
                <h3>Add Player</h3>
                <PlayerForm newPlayer={newPlayer}
                setNewPlayer={setNewPlayer}
                onSubmitProp={addNewPlayer} />
                {errors.map((err,idx) => <p key={idx}>{err}</p>)}
            </div>
        </div>
    )
}
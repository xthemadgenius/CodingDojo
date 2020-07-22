import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default props => {
    const {playerId, gameId} = props;
    const [player, setPlayer] = useState();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/player/${playerId}`)
        .then(res => setPlayer(res.data))
    }, []);

    const onPlayHandler = (statsPlay) => {
        const updatePlayer = {
            ...player,
            status: {
                ...player.status,
                [`game${gameId}`]: statsPlay
            }
        }
        axios.put(`http://localhost:8000/api/player/${playerId}`, updatePlayer)
        .then(res => {
            setPlayer(updatePlayer);
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <button 
            style={{backgroundColor: player && player.status[`game${gameId}`] === 1 ? "#4CAF50" : ""}}
            onClick={(e) => onPlayHandler(1)}>
                Playing
            </button>
            <button 
            style={{backgroundColor: player && player.status[`game${gameId}`] === -1 ? "#FF0000" : ""}}
            onClick={(e) => onPlayHandler(-1)}>
                Not Playing
            </button>
            <button 
            style={{backgroundColor: player && player.status[`game${gameId}`] === 0 ? "#FFFF00" : ""}}
            onClick={(e) => onPlayHandler(0)}>
                Undecided
            </button>
        </div>
    )
}


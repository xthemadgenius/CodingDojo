import React from 'react';
import axios from 'axios';

export default props => {
    
    const onClickDestroy = (e) => {
        e.preventDefault();
        axios.delete(`http://local:8000/api/player/${props.playerId}`)
        .then(res => {
            if(window.confirm(`Are you sure you want to delete ${props.name}`)){
                props.successCallback();
            }
        })
    }
    return (
        <button onClick={onClickDestroy} >Delete</button>
    )
}
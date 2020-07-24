import React from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const DeleteButton = props => {

    const {id} = props;

    const onClickHandler = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/athletes/${id}`)
        .then(res => {
            navigate('/');
            console.log(res);
        })
        .catch(err => console.log(err));
    }

    return (
        <button
        onClick={onClickHandler}
        >Delete</button>
    )
}

export default DeleteButton;
import React from 'react';
import DeleteButton from '../components/DeleteButton';

const DetailView = (props) => {
    const {id} = props;
    return (
        <div>
            <h1>Player: {id} </h1>
            <DeleteButton/>
        </div>
    )
}

export default DetailView;
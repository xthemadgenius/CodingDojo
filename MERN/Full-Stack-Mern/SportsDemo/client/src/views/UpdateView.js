import React from 'react';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';

const UpdateView = (props) => {
    const {id} = props;
    return (
        <div>
            <h1>Edit Player: {id} </h1>
            <hr/>
            <Form/>
            <DeleteButton/>
        </div>
    )
}

export default UpdateView;
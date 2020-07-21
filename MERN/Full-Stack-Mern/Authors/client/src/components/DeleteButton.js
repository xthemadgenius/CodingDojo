import React from 'react';
import axios from 'axios';
import {UpdateBtn} from '../styles/Styles'


export default props => {
    const {authorId, successCallback} = props;

    const deleteAuthor =(e) => {
        axios.delete(`http://localhost:8000/api/authors/${authorId}`)
        .then(res => successCallback(authorId));
    }
    return (
        <UpdateBtn onClick={deleteAuthor}>Delete</UpdateBtn>
    )
}

import React from 'react';
import axios from 'axios';
import { RoundedBtn } from '../style/Styles'

export default props => {
    const {productId, successCallback} = props;

    const deleteProduct = (e) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
            successCallback();
        })
    }

    return (
        <RoundedBtn onClick={deleteProduct}>
            Delete
        </RoundedBtn>
    )
}
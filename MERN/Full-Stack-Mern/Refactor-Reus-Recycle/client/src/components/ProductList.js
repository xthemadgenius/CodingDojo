import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {

    const {removeFromDom} = props;

    const deleteProduct = (productId) => {
        axios.delete(`http://localhost:8000/api/product/${productId}`)
        .then(res => {
            removeFromDom(productId);
        })
    }
    
    return (
        <div>
            {props.product.map((product, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/${product._id}`}>
                            <h3>{product.title}</h3> 
                        </Link>
                        <button onClick={(e) => {deleteProduct(product._id)}}>Delete</button>
                    </div>
                )
            })}
        </div>
    )
}
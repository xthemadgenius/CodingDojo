import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
    
    return (
        <div>
            {props.product.map((product, idx) => {
                return <h3 key={idx}><Link to={`/${product._id}`}>{product.title}</Link></h3>
            })}
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {

    const [product, setProduct] = useState([]);

    useState(() => {
        axios.get(`http://localhost:8000/api/product`)
        .then(res => setProduct(res.data));
    }, [])

    const removeFromDom = productId => {
        setProduct(product.filter(prod => prod._id !== productId));
    }
    
    return (
        <div>
            {product.map((product, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/${product._id}`}>
                            <h3>{product.title}</h3> 
                        </Link>
                        <Link to={`/${product._id}/edit`}>
                            <h3>Edit</h3> 
                        </Link>
                        <DeleteButton
                        productId={product._id}
                        successCallback={() => removeFromDom(product._id)}
                        />
                    </div>
                )
            })}
        </div>
    )
}
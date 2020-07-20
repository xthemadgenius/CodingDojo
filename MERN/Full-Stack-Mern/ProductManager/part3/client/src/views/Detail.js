import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {
    const [product, setProduct] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${props.id}`)
        .then(res => setProduct(res.data));
    }, []);

    return (
        <div>
            <h1>{product.title}</h1>
            <h3>Price: ${product.price}</h3>
            <p>{product.description}</p>
            <Link to={`/${product._id}/edit`}>Edit</Link><br/>
            <Link to={`/`}>Home</Link>
        </div>
    )
}
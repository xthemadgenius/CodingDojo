import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import {RoundedBtn} from '../style/Styles'
import { withTheme } from 'styled-components';

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
            <RoundedBtn>
                <Link to={`/${product._id}/edit`} style={{ textDecoration: 'none', color: "white"}}>Edit</Link>
            </RoundedBtn>
            <br/>
            <br/>
            <Link to={`/`}>Home</Link>
        </div>
    )
}
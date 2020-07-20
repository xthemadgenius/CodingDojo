import React, {useState, useEffect} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../style/Styles';
import axios from 'axios';
import {Link} from '@reach/router'
import ProductForm from '../components/ProductForm'

export default props => {

    const {id} = props;
    const [product, setProduct] = useState();
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setProduct(res.data);
            setLoaded(true);
        })
    }, []);

    const updateProduct = (prod) => {
        axios.put(`http://localhost:8000/api/product/${id}`, prod)
        .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            {loaded && (
                <ProductForm 
                onSubmitProp={updateProduct}
                initialTitle={product.title}
                initialPrice={product.price}
                initialDescription={product.description}
                />
            )}
            <br/><br/><Link to={`/`}>Home</Link>
        </div>
    )
}
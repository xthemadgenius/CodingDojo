import React, {useState, useEffect} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../style/Styles';
import axios from 'axios';
import {Link, navigate} from '@reach/router'
import ProductForm from '../components/ProductForm'
import DeleteButton from '../components/DeleteButton';

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
                <div>
                    <ProductForm 
                    onSubmitProp={updateProduct}
                    initialTitle={product.title}
                    initialPrice={product.price}
                    initialDescription={product.description}
                    />
                    <DeleteButton 
                    productId={product._id} 
                    successCallback={() => navigate("/")} 
                    />
                </div>
            )}
            <br/><br/><Link to={`/`}>Home</Link>
        </div>
    )
}
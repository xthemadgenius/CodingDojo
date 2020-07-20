import React, {useState, useEffect} from 'react'
import ProductForm from '../components/ProductForm';
import ProductList from '../components/ProductList';
import axios from 'axios';

export default () =>{

    const [product, setProduct] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:8000/api/product')
        .then(res => {
            setProduct(res.data);
            setLoaded(true)
        })
    })


    const removeFromDom = (productId) => {
        setProduct(product.filter(prod => prod._id != productId));
    }
    
    const createProduct = prod => {
        axios.post(`http://localhost:8000/api/product`, prod)
        .then(res => {
            setProduct([...product, res.data])
        })
    }

    return (
        <div>
            <ProductForm
            onSubmitProp={createProduct}
            initialTitle=""
            initialPrice=""
            initialDescription=""
            />
            <hr/>
            <h1>Product List</h1>
            {loaded && <ProductList product={product} removeFromDom={removeFromDom}/>}
        </div>
    )
}
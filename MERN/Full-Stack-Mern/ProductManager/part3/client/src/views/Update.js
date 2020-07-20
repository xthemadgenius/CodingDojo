import React, {useState, useEffect} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../style/Styles';
import axios from 'axios';
import {Link} from '@reach/router'

export default props => {

    const {id} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            setTitle(res.data.title);
            setPrice(res.data.price);
            setDescription(res.data.description);
        })
    }, []);

    const updateProduct = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/product/${id}`, {
            title,
            price,
            description,
        })
        .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Product</h1>
            <TheForm onSubmit={updateProduct}>
                <FormGroup>
                    <FillLabel>Title</FillLabel>
                    <MainInput type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Title</FillLabel>
                    <MainInput type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Title</FillLabel>
                    <MainInput type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
                </FormGroup>
                <RoundedBtn type="submit" onClick={event =>  window.location.href=`/${id}`}>Submit</RoundedBtn>
            </TheForm>
            <br/><br/><Link to={`/`}>Home</Link>
        </div>
    )
}
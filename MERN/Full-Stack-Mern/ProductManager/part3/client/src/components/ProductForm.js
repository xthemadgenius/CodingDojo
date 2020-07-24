import React, { useState } from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../style/Styles';

export default() => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState(null);

    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then((res) => {
            console.log(res)
            navigate("/")
        })
        .catch((err) => {
            setErrors(err.response.data.errors);
            console.log(err);
        });
    }

    return (
        <TheForm onSubmit={onSubmit}>
            <h2>Create a Product</h2>
            <FormGroup>
                <FillLabel>Title</FillLabel>
                {errors && (
                    <p style={{ color: "red" }}>
                        {errors?.title?.properties?.message}
                    </p>
                )}
                <MainInput type="text" onChange={(e) => setTitle(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <FillLabel>Price</FillLabel>
                <MainInput type="number" onChange={(e) => setPrice(e.target.value)}/>
            </FormGroup>
            <FormGroup>
                <FillLabel>Description</FillLabel>
                <MainInput type="text" onChange={(e) => setDescription(e.target.value)}/>
            </FormGroup>
            <RoundedBtn type="submit">Submit</RoundedBtn>
        </TheForm>
    )
}
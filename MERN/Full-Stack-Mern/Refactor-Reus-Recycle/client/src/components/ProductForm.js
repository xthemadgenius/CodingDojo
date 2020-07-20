import React, { useState } from 'react';
import axios from 'axios';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../style/Styles';

export default props => {
    const {initialTitle, initialPrice, initialDescription, onSubmitProp} = props;
    const [title, setTitle] = useState(initialTitle);
    const [price, setPrice] = useState(initialPrice);
    const [description, setDescription] = useState(initialDescription);

    const onSubmitHandler = (e) =>{
        e.preventDefault();
        onSubmitProp({title, price, description});
    }

    return (
        <TheForm onSubmit={onSubmitHandler}>
            <h2>Create a Product</h2>
            <FormGroup>
                <FillLabel>Title</FillLabel>
                <MainInput type="text" name="title" value={title} onChange={(e) => {setTitle(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
                <FillLabel>Price</FillLabel>
                <MainInput type="number" name="price" value={price} onChange={(e) => {setPrice(e.target.value)}}/>
            </FormGroup>
            <FormGroup>
                <FillLabel>Description</FillLabel>
                <MainInput type="text" name="description" value={description} onChange={(e) => {setDescription(e.target.value)}}/>
            </FormGroup>
            <RoundedBtn type="submit">Submit</RoundedBtn>
        </TheForm>
    )
}
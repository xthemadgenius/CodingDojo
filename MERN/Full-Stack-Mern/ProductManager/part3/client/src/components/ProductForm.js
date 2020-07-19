import React, { useState } from 'react';
import axios from 'axios';

export default() => {
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const onSubmit = (e) =>{
        e.preventDefault();
        axios.post('http://localhost:8000/api/product', {
            title,
            price,
            description
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
    }

    return (
        <form onSubmit={onSubmit}>
            <div>
                <label>Title</label><br/>
                <input type="text" onChange={(e) => setTitle(e.target.value)}/>
            </div>
            <div>
                <label>Price</label><br/>
                <input type="number" onChange={(e) => setPrice(e.target.value)}/>
            </div>
            <div>
                <label>Description</label><br/>
                <input type="text" onChange={(e) => setDescription(e.target.value)}/>
            </div>
            <br/>
            <input type="submit"/>
        </form>
    )
}
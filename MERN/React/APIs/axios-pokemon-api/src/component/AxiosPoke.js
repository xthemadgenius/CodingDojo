import React, {useEffect, useState} from 'react';
import {MainButton, Poke} from './Styles';
import axios from 'axios';

const AxiosPoke = (props) => {
    const [pokeData, setPokeData] = useState([]);
    const onClick = (e) =>{
        axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(res =>{
            setPokeData(res.data.results);
        })
        .catch(err => console.log(err));
    };
    return (
        <div>
            <MainButton onClick={onClick}>Whose That Pokemon?</MainButton>
            {pokeData.map((poke, i) =>
                <Poke key={i}>{poke.name}</Poke>
            )}
        </div>
    )
}

export default AxiosPoke;
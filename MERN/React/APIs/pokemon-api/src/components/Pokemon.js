import React, {useState, useEffect} from 'react';
import { MainButton, Poke } from './Styles';

const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);
    const count = 0;
    const onClick = (e) => {
        fetch('https://pokeapi.co/api/v2/pokemon?offset=0&limit=964')
        .then(res => {
            return res.json();
        })
        .then(res =>{
            setPoke(res.results);
        })
        .catch(error =>{
            console.log(error);
        })
    }
    return (
        <div>
            <MainButton onClick={onClick}>Fetch Pokemon</MainButton>
            <div>
                {poke.map((mon, i) =>(
                    <Poke key={i}>{mon.name}</Poke>
                ))}
            </div>
        </div>
    );
}
export default Pokemon;
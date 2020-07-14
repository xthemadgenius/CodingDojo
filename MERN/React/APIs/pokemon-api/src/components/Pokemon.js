import React, {useState} from 'react';
import { MainButton, Poke } from './Styles';

const Pokemon = (props) => {
    const [poke, setPoke] = useState([]);
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
            {poke.map((mon, i) =>(
                <Poke key={i}>{mon.name}</Poke>
            ))}
        </div>
    );
}
export default Pokemon;
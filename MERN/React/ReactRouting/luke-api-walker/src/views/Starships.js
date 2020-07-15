import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SSBox, SSDiv, SSHead, SSText } from '../styles/SpecStyles';

const Starships = ({id}) => {
    const [ships, setShips] = useState([]);
    useEffect(() =>{
        axios
        .get(`https://swapi.dev/api/starships/${id}`)
        .then(res => {setShips(res.data)});
    }, [id]);

    return (
        <SSBox>
            <SSHead>{ships.name}</SSHead>
            <SSDiv>
                <SSText>Model:</SSText>
                <h3>{ships.model}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Manfacturer:</SSText>
                <h3>{ships.manufacturer}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Class:</SSText>
                <h3>{ships.starship_class}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Cost:</SSText>
                <h3>{ships.cost_in_credits} credits</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Length:</SSText>
                <h3>{ships.length}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Crew:</SSText>
                <h3>{ships.crew}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Hyperdrive Rating:</SSText>
                <h3>{ships.hyperdrive_rating}</h3>
            </SSDiv>
        </SSBox>
    )
}

export default Starships;
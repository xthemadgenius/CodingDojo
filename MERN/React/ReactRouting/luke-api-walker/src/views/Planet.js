import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SSBox, SSDiv, SSHead, SSText } from '../styles/SpecStyles';

const Planet = ({id}) => {
    const [planet, setPlanet] = useState([]);
    useEffect(() =>{
        axios
        .get(`https://swapi.dev/api/planets/${id}`)
        .then(res => {setPlanet(res.data)});
    }, [id]);

    return (
        <SSBox>
            <SSHead>{planet.name}</SSHead>
            <SSDiv>
                <SSText>Terrain:</SSText>
                <h3>{planet.terrain}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Climate:</SSText>
                <h3>{planet.climate}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Poplation:</SSText>
                <h3>{planet.population}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Gravity:</SSText>
                <h3>{planet.gravity}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Diameter:</SSText>
                <h3>{planet.diameter} km</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Rotation Period:</SSText>
                <h3>{planet.rotation_period} days</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Orbit Period:</SSText>
                <h3>{planet.orbital_period} days</h3>
            </SSDiv>
        </SSBox>
    )
}

export default Planet;
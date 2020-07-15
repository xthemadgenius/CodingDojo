import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SSBox, SSDiv, SSHead, SSText } from '../styles/SpecStyles';

const Planet = ({id}) => {
    const [responseData, setResponseData] = useState([]);
    useEffect(() =>{
        axios.get('https://swapi.dev/api/planets/' + id)
        .then(res => {setResponseData(res.data)});
    }, [id]);

    return (
        <SSBox>
            <SSHead>{responseData.name}</SSHead>
            <SSDiv>
                <SSText>Terrain:</SSText>
                <h3>{responseData.terrain}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Climate:</SSText>
                <h3>{responseData.climate}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Poplation:</SSText>
                <h3>{responseData.population}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Gravity:</SSText>
                <h3>{responseData.gravity}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Diameter:</SSText>
                <h3>{responseData.diameter} km</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Rotation Period:</SSText>
                <h3>{responseData.rotation_period} days</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Orbit Period:</SSText>
                <h3>{responseData.orbital_period} days</h3>
            </SSDiv>
        </SSBox>
    )
}

export default Planet;
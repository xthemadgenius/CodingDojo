import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { SSBox, SSDiv, SSHead, SSText } from '../styles/SpecStyles';

const Starships = ({id}) => {
    const [responseData, setResponseData] = useState([]);

    console.log(id);
    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/' + id)
            .then(res => { setResponseData(res.data) });
    }, [id]);

    return (
        <SSBox>
            <SSHead>{responseData.name}</SSHead>
            <SSDiv>
                <SSText>Model:</SSText>
                <h3>{responseData.model}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Manfacturer:</SSText>
                <h3>{responseData.manufacturer}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Class:</SSText>
                <h3>{responseData.starship_class}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Cost:</SSText>
                <h3>{responseData.cost_in_credits} credits</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Length:</SSText>
                <h3>{responseData.length}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Crew:</SSText>
                <h3>{responseData.crew}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Hyperdrive Rating:</SSText>
                <h3>{responseData.hyperdrive_rating}</h3>
            </SSDiv>
        </SSBox>
    )
}

export default Starships;
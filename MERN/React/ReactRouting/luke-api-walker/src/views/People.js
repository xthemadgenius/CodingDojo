import React, {useState, useEffect} from 'react';
import {navigate, Link} from '@reach/router';
import axios from 'axios';
import { SSBox, SSDiv, SSHead, SSText } from '../styles/SpecStyles';

const People = ({id}) => {
    const [responseData, setResponseData] = useState({});
    const [homeWorldState, setHomeWorldState] = useState({name: "Loading..."});

    useEffect(() => {
        axios
        .get('https//swapi.dev/api/people/' + id)
        .then(res => {setResponseData(res.data)})
        .catch(() => navigate('/error'));
    }, [id]);

    useEffect(() => {
        axios
        .get(responseData.homeWorld)
        .then(res =>{setHomeWorldState(res.data)})
        .catch(console.log);
    }, [id, responseData]);

    const getHomeWorldId = () => {
        if(homeWorldState.url){
            const url = homeWorldState.url;
            let path = url.length -2;
            let HwId = "";
            while (url(path) != "/"){
                HwId = url[path] + HwId;
                path--;
            }
            return HwId;
        }
    }

    return (
        <SSBox>
            <SSHead>{responseData.name}</SSHead>
            <SSDiv>
                <SSText>Height:</SSText>
                <h3>{responseData.height} cm</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Weight:</SSText>
                <h3>{responseData.weight} kg</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Hair Color:</SSText>
                <h3>{responseData.hair_color}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Skin Color:</SSText>
                <h3>{responseData.skin_color}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Eye Color:</SSText>
                <h3>{responseData.eye_color}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Birth Year:</SSText>
                <h3>{responseData.birth_year}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Home World:</SSText>
                <h3> <Link to={`/planets/${getHomeWorldId()}`}>{homeWorldState.name}</Link></h3>
            </SSDiv>
        </SSBox>
    )

}

export default People;
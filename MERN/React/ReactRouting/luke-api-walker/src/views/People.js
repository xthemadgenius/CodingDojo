import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import { SSBox, SSDiv, SSHead, SSText } from '../styles/SpecStyles';

const People = ({ id }) => {
    const [people, setPeople] = useState([]);
    const [home, setHome] = useState({ name: "Loading..." });

    useEffect(() => {
        axios
            .get('https://swapi.dev/api/people/' + id)
            .then(res => { setPeople(res.data) })
            .catch(() => navigate('/error'));
    }, [id], 2500);

    useEffect(() => {
        axios
            .get(people.homeworld)
            .then(res => {
                setHome(res.data);
            })
            .catch(console.log);
    }, [id, people]);

    const getHomeWorldId = () => {
        if (home.url) {
            const url = home.url;
            let path = url.length - 2;
            let HwId = "";

            while (url[path] !== "/") {
                HwId = url[path] + HwId;
                path--;
            }
            return HwId;
        }
    }

    return (
        <SSBox>
            <SSHead>{people.name}</SSHead>
            <SSDiv>
                <SSText>Height:</SSText>
                <h3>{people.height} cm</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Weight:</SSText>
                <h3>{people.mass} kg</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Hair Color:</SSText>
                <h3>{people.hair_color}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Skin Color:</SSText>
                <h3>{people.skin_color}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Eye Color:</SSText>
                <h3>{people.eye_color}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Birth Year:</SSText>
                <h3>{people.birth_year}</h3>
            </SSDiv>
            <SSDiv>
                <SSText>Home World:</SSText>
                <h3> <Link to={`/planets/${getHomeWorldId()}`}>{home.name}</Link></h3>
            </SSDiv>
        </SSBox>
    )
}

export default People;
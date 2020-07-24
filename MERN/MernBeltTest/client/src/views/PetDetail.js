import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import {Link} from "@reach/router";
import axios from 'axios';

const PetDetail = (props) => {

    const {id} = props;
    const [pet, setPet] =useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/belts/${id}`)
        .then((res) => setPet(res.data))
        .catch((err) => console.log(err));
    }, [])
    return (
        <div>
            <h1>Know a pet needing a good home?</h1>
            <h2>Details about: {pet.name}</h2>
            <Link to="/">Back to home</Link>
            <div>
                <p>Pet Type: {pet.petType}</p>
                <p>Description: {pet.description}</p>
                <h3>Skills</h3>
                <p>{pet.skill1}</p>
                <p>{pet.skill2}</p>
                <p>{pet.skill3}</p>
                <DeleteButton id={pet._id}>Adopt PETNAME</DeleteButton>
            </div>
        </div>
    )
}

export default PetDetail;
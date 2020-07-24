import React from 'react';
import PetForm from '../components/PetForm';
import { Link, navigate } from '@reach/router';
import Axios from 'axios';

const AddPet = (props) => {

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        Axios.post(`http://localhost:8000/api/belts/`, data)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Know a Pet needing a Home</h1>
            <Link to="/">Back to home</Link>
            <PetForm
            onSubmitHandler={onSubmitHandler}
            initialName=""
            initialPetType=""
            initialDescription=""
            initialSkill1=""
            initialSkill2=""
            initialSkill3=""
            />
        </div>
    )
}
export default AddPet;
import React, {useState} from 'react';
import PetForm from '../components/PetForm';
import { Link, navigate } from '@reach/router';
import Axios from 'axios';

const AddPet = (props) => {

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        Axios.post(`http://localhost:8000/api/belts/`, data)
        .then(res => {
            navigate('/')
            console.log("fight me")
        })
        .catch(err => {
            console.log("catch me")
            console.log(err);
            const errorResponse = err.response.data.errors;
            console.log(errorResponse);
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                console.log(errorResponse[key]);
                errorArr.push(errorResponse[key].properties.message);
            }
            console.log(errorArr);
            setErrors(errorArr);
        });
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
            {errors.map((err, idx) => {
                return (
                <p key={idx} style={{ color: "red" }}>{err}</p>
                )
            })}
        </div>
    )
}
export default AddPet;
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
        })
        .catch(err => {
            console.log(err);
            const errorResponse = err.response.data.errors;
            const errorArr = [];
            for(const key of Object.keys(errorResponse)){
                errorArr.push(errorResponse[key].message);
            }
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
import React, {useState, useEffect} from 'react';
import PetForm from '../components/PetForm';
import { Link, navigate } from '@reach/router';
import axios from 'axios';
const EditPet = (props) => {

    const {id} = props;

    const [errors, setErrors] = useState([]);

    const [pet, setPet] = useState({});
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/belts/${id}`)
        .then((res) => {
            setPet(res.data);
            setLoaded(true);
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
    })

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/belts/${id}`, data)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }

    return (
        <div>
            <h1>Edit {pet.name}</h1>
            <Link to="/">Back to home</Link>
            {loaded &&
                <PetForm
                onSubmitHandler={onSubmitHandler}
                initialName={pet.name}
                initialPetType={pet.petType}
                initialDescription={pet.description}
                initialSkill1={pet.skill1}
                initialSkill2={pet.skill2}
                initialSkill3={pet.skill3}
                />
            }
            {errors.map((err, idx) => {
                return (
                <p key={idx} style={{ color: "red" }}>{err}</p>
                )
            })}
            
        </div>
    )
}
export default EditPet;
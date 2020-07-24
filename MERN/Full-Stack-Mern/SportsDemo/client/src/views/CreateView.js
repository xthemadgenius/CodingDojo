import React, {useState} from 'react';
import Form from '../components/Form';
import axios from 'axios';
import { navigate } from '@reach/router';

const CreateView = (props) => {

    const [errors, setErrors] = useState([]);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.post(`http://localhost:8000/api/athletes/`, data)
        .then(res => {
            navigate('/');
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
            <h1>Create a new Athletes</h1>
            <hr/>
            <Form 
            onSubmitHandler={onSubmitHandler}
            initialFirstName=""
            initialLastName=""
            initialSport=""
            initialTeam=""
            />
            {errors.map((err, idx) => {
                return (
                <p key={idx} style={{ color: "red" }}>{err}</p>
                )
            })}
        </div>
    )
}

export default CreateView;
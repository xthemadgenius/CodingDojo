import React, {useState, useEffect} from 'react';
import Form from '../components/Form';
import DeleteButton from '../components/DeleteButton';
import { navigate } from '@reach/router';
import axios from 'axios';


const UpdateView = (props) => {

    const {id} = props;

    const [athlete, setAthlete] = useState({});
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        axios.get(`http://localhost:8000/api/athletes/${id}`)
        .then((res) => {
            setAthlete(res.data);
            setLoaded(true);
        })
        .catch((err) => console.log(err));
    }, []);

    const onSubmitHandler = (e, data) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/athletes/${id}`, data)
        .then(res => {
            navigate('/')
        })
        .catch(err => console.log(err));
    }
    return (
        <div>
            <h1>Edit: {athlete.firstName} {athlete.lastName}</h1>
            <hr/>
            {loaded &&
                <Form 
                onSubmitHandler={onSubmitHandler}
                initialFirstName={athlete.firstName}
                initialLastName={athlete.lastName}
                initialSport={athlete.sport}
                initialTeam={athlete.team}
            />}
            <DeleteButton id={athlete._id}/>
        </div>
    )
}

export default UpdateView;
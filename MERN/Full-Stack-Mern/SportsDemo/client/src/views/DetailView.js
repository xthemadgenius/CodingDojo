import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import axios from 'axios';

const DetailView = (props) => {

    const {id} = props;
    const [athlete, setAthlete] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/athletes/${id}`)
        .then((res) => setAthlete(res.data))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>{athlete.firstName} {athlete.lastName}</h1>
            <h2>Sport: {athlete.sport}</h2>
            <h3>Team: {athlete.team}</h3>
            <DeleteButton id={athlete._id}/>
        </div>
    )
}

export default DetailView;
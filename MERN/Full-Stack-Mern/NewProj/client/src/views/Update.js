import React, {useEffect, useState} from 'react';
import axios from 'axios';
import PersonForm from '../components/PersonForm';

export default props => {

    const { id } = props;
    const [person, setPerson] = useState();
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
        .then(res => {
            setPerson(res.data);
            setLoaded(true);
        })
    }, [])

    const updatePerson = person => {
        axios.put(`http://localhost:8000/api/people/${id}`, person)
        .then(res => console.log(res));
    }

    return (
        <div>
        {loaded && (
            <PersonForm 
            onSubmitProp={updatePerson}
            initialFirstName={person.firstName}
            initialLastName={person.lastName}
            />
        )}
        </div>
    )
}
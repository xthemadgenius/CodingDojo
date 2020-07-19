import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default props => {

    const { id } = props;
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people/${id}`)
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
        })
    }, []);

    const updatePerson =(e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/people/${id}`, {
            firstName,
            lastName,
        })
        .then(res => console.log(res));
    }

    return (
        <div>
            <h1>Update a Person</h1>
            <form onSubmit={updatePerson}>
                <div>
                    <label>First Name</label><br/>
                    <input type="text" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                </div>
                <div>
                    <label>Last Name</label><br/>
                    <input type="text" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )

}
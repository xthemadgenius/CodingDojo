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
    // const [firstName, setFirstName] = useState('');
    // const [lastName, setLastName] = useState('');

    // useEffect(() => {
    //     axios.get(`http://localhost:8000/api/people/${id}`)
    //     .then(res => {
    //         setFirstName(res.data.firstName);
    //         setLastName(res.data.lastName);
    //     })
    // }, []);

    // const updatePerson =(e) => {
    //     e.preventDefault();
    //     axios.put(`http://localhost:8000/api/people/${id}`, {
    //         firstName,
    //         lastName,
    //     })
    //     .then(res => console.log(res));
    // }

    // return (
    //     <div>
    //         <h1>Update a Person</h1>
    //         <form onSubmit={updatePerson}>
    //             <div>
    //                 <label>First Name</label><br/>
    //                 <input type="text" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
    //             </div>
    //             <div>
    //                 <label>Last Name</label><br/>
    //                 <input type="text" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
    //             </div>
    //             <input type="submit"/>
    //         </form>
    //     </div>
    // )

}
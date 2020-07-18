import React, {useState} from 'react';
import axios from 'axios';

export default () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/people', {
            firstName,
            lastName
        })
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name</label><br/>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
            </div>
            <div>
                <label>Last Name</label><br/>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <input type="submit"/>
        </form>
    )
}
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Link} from '@reach/router';
import DeleteButton from './DeleteButton';

export default props => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/people`)
        .then(res => setPeople(res.data))
    }, [])

    const removeFromDom = personId => {
        setPeople(people.filter(person => person._id !== personId))
    }
    return (
        <div>
            {people.map((person, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`${person._id}`}>
                            <p>{person.lastName}, {person.firstName}</p>
                        </Link>
                        <Link to={`${person._id}/edit`}>
                            <p>Edit</p>
                        </Link>
                        <DeleteButton 
                        personId={person._id}
                        successCallback={() => removeFromDom(person._id)}
                        />
                    </div>
                    )
            })}
        </div>
    )
}
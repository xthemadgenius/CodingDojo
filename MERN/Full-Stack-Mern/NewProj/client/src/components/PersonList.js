import React from 'react';
import axios from 'axios';
import {Link} from '@reach/router';

export default props => {

    const {removeFromDom} = props;

    const deletePerson = (personId) => {
        axios.delete(`http://localhost:8000/api/people/${personId}`)
        .then(res => {
            removeFromDom(personId);
        })
    }
    return (
        <div>
            {props.people.map((person, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`${person._id}`}>
                            <p>{person.lastName}, {person.firstName}</p>
                        </Link>
                        <button onClick={(e) => {deletePerson(person._id)}}>Delete</button>
                    </div>
                    )
            })}
        </div>
    )
}
import React, {useState, useEffect} from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link } from '@reach/router';
import axios from 'axios';

const IndexView = (props) => {

    const [athletes, setAthletes] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/athletes')
        .then((res) => setAthletes(res.data))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>Athletes</h1>
            <Link to="/create">Create Player</Link>
            <hr/>
            {athletes.map((athlete, idx) => {
                return (
                <div key={idx}>
                    <Link to={`/${athlete._id}`}><h3>{athlete.firstName} {athlete.lastName}</h3></Link>
                    <Link to={`/${athlete._id}/edit`}>Edit</Link><br/><br/>
                    <DeleteButton id={athlete._id}/>
                </div>
                )
            })}
        </div>
    )
}

export default IndexView;
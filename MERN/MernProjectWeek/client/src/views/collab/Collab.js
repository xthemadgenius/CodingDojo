import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import './collab.css';

const Collab =(props) => {

    const [collab, setCollab] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/????`)
        .then(res => setCollab(res.data))
    }, []);

    return (
        <div className="collab">
            <h1>Rhino's Point</h1>
            <h3>created by: <Link to="/users/1">Stevie Boy</Link></h3>
            <hr/>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur nihil porro voluptatibus officia perspiciatis modi eveniet aperiam dolor odit, reiciendis perferendis, asperiores fugiat quisquam dolores labore voluptates repellat sint!</p>
            <hr/>
            <div>
                <h3>Collaborators</h3>
                <Link to="/users/1">Lleroy</Link>
            </div>
            <form action="">
                <button type="submit">Become a Collaborator</button>
            </form>
        </div>
    )
}

export default Collab;
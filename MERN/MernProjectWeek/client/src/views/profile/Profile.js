import React, {useEffect, useState} from 'react';
import './profile.css';
import { Link } from '@reach/router';
import ReviewForm from '../../components/forms/ReviewForm';
import axios from 'axios';

const Profile = (props) => {

    const {id} = props;
    const [users, setUsers] =useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => setUsers(res.data))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className="profile">
            <h1>{users.firstName} {users.lastName} </h1>
            <img src="https://i.pinimg.com/originals/2f/59/f1/2f59f17586bc76ec69071cd3672cdc4d.png" alt=""/>
            <h3>Skills</h3>
            <p>{users.skills}</p>
            <h3>Projects</h3>
            <p>React, Javascript, Html, css, Python, Node.js, AWS</p>
            <h3>Current Offers</h3>
            <p>React, Javascript, Html, css, Python, Node.js, AWS</p>
            <h3>Created Collaborations</h3>
            <Link className="troll" to="/collaborate/1">Rhinos Point</Link>
            <h3>Collaboration Contributions</h3>
            <Link className="troll" to="/collaborate/1">Rhinos Point</Link><br/><br/><br/>
            <Link className="bro" to={`/users/${users._id}/edit`}>Edit</Link><br/><br/><br/>
            <Link className="bro" to="/users/1/create/collab">Create Collab</Link><br/><br/><br/>
            <ReviewForm/>
            <div className="reviews">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio delectus reprehenderit hic necessitatibus magni! Assumenda voluptatum, amet temporibus autem deserunt eius, incidunt voluptas maiores tempore, nisi quod officia omnis!</p>
                <h3>- Bob Sagot</h3>
            </div>
        </div>
    )
}

export default Profile;
import React, {useEffect, useState} from 'react';
import './profile.css';
import { Link } from '@reach/router';
import ReviewForm from '../../components/forms/ReviewForm';
import axios from 'axios';

const BizPro = (props) => {

    const {id} = props;
    const [business, setBusiness] =useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/business/${id}`)
        .then(res => setBusiness(res.data))
        .catch((err) => console.log(err));
    }, [])

    return (
        <div className="profile">
            <h1>{business.company}</h1>
            <h3>Location</h3>
            <p>{business.location}</p>
            <h3>Phone</h3>
            <p>{business.phoneNumber}</p>
            <h3>Buisness Email</h3>
            <p>{business.email}</p>
            <h3>Positions Availble</h3>
            <Link className="troll" to="/job/1">Software Engineer</Link>
            <h3>About {business.company}</h3>
            <p>{business.about}</p><br/>
            <Link className="bro" to={`/business/${business._id}/edit`}>Edit</Link><br/><br/><br/>
            <Link className="bro" to="/users/1/create/collab">Create Collab</Link><br/><br/><br/>
            <Link className="bro" to="/business/1/create/job">Create Job</Link>
            <ReviewForm/>
            <div className="reviews">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero optio delectus reprehenderit hic necessitatibus magni! Assumenda voluptatum, amet temporibus autem deserunt eius, incidunt voluptas maiores tempore, nisi quod officia omnis!</p>
                <h3>- Bob Sagot</h3>
            </div>
        </div>
    )
}

export default BizPro;
import React, {useState, useEffect} from 'react';
import DashHead from '../select/DashHead';
import axios from 'axios';
import {Link} from '@reach/router';
import './ops.css';

const Collaborate = (props) => {

    const [collab, setCollab] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user`)
            .then(res => setCollab(res.data))
    }, [])

    return (
        <div>
            <DashHead/>
            <h1>Collaborate</h1>
            <table className="ops">
                <tr>
                    <th>Created By</th>
                    <th>Project Name</th>
                    <th>Short Description</th>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/business/1">Apple</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/business/1">LinkedIn</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/business/1">Facebook</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/business/1">Alibaba</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/business/1">Target</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
                <tr>
                    <td><Link to="/users/1">Alfreds Futterkiste</Link></td>
                    <td><Link to="/collaborate/1">Rhinos Point</Link></td>
                    <td>Creating a website about how sharp Rhinos Horns are and...</td>
                </tr>
            </table>
        </div>
    )
}

export default Collaborate;
import React, {useState, useEffect} from 'react';
import DashHead from '../select/DashHead';
import {Link} from '@reach/router';
import './ops.css';
import axios from 'axios';

const Users = (props) => {

    const [user, setUser] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
        .then(res => setUser(res.data))
        .catch(err => console.log(err));
    })

    return (
        <div className="theTable">
            <DashHead/>
            <h1>Users</h1>
            <table className="ops">
                <tr>
                    <th>User</th>
                    <th>Skills</th>
                    <th>Readiness</th>
                </tr>
                {user.map((users,idx) => {
                    return(
                        <tr key={idx}>
                            <td><Link to={`/users/${users._id}`}>{users.firstName} {users.lastName}</Link></td>
                            <td>React, Javascript, Html, CSS, Python, Node.js, AWS</td>
                            <td>Ready</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Users;
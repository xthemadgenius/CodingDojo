import React, {useState, useEffect} from 'react';
import DashHead from '../select/DashHead';
import {Link} from '@reach/router';
import axios from 'axios'
import './ops.css';

const Business = (props) => {

    const [business, setBusiness] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:8000/api/business`)
        .then(res => setBusiness(res.data))
        .catch(err => console.log(err));
    })

    return (
        <div>
            <DashHead/>
            <h1>Companies</h1>
            <table className="ops">
                <tr>
                    <th>Company</th>
                    <th>Short Description</th>
                    <th>Hiring?</th>
                </tr>
                {business.map((biz,idx) => {
                    return(
                        <tr key={idx}>
                            <td><Link to={`/business/${biz._id}`}>{biz.company}</Link></td>
                            <td>{biz.about}</td>
                            <td>Hiring</td>
                        </tr>
                    )
                })}
            </table>
        </div>
    )
}

export default Business;
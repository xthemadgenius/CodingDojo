import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import axios from 'axios';
import './job.css';

const Jobs =(props) => {

    const [jobs, setJobs] = useState({});

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users`)
        .then(res => setJobs(res.data))
    }, []);

    return (
        <div className="jobs">
            <h1>Software Engineer</h1>
            <h3>created by: <Link to="/business/1">Apple</Link></h3>
            <hr/>
            <h4>Job Desciption</h4>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur nihil porro voluptatibus officia perspiciatis modi eveniet aperiam dolor odit, reiciendis perferendis, asperiores fugiat quisquam dolores labore voluptates repellat sint!</p>
            <hr/>
            <div>
                <h4>Job Pre-Requistes</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur nihil porro voluptatibus officia perspiciatis modi eveniet aperiam dolor odit, reiciendis perferendis, asperiores fugiat quisquam dolores labore voluptates repellat sint!</p>
                <hr/>
                <h4>Skills Required</h4>
                <p>React, Javascript, Html, CSS, Python, Node.js, AWS</p>
                <hr/>
                <h4>Job Perks</h4>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum pariatur nihil porro voluptatibus officia perspiciatis modi eveniet aperiam dolor odit, reiciendis perferendis, asperiores fugiat quisquam dolores labore voluptates repellat sint!</p>
                <hr/>
            </div>
            <form action="">
                <button type="submit">Apply</button>
            </form>
        </div>
    )
}

export default Jobs;
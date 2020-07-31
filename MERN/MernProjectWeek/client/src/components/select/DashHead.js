import React from "react";
import {Link} from '@reach/router';
import './formhead.css';

const DashHead = (props) => {


    return (
        <div className="formHead">
            <h1>Dashboard</h1>
            <hr/>
            <Link to="/">Users</Link>
            <Link to="/business">Companies</Link>
            <Link to="/collaborate">Colloborate</Link>
            <Link to="/jobs">Jobs</Link>
            <hr/>
        </div>
    )
}

export default DashHead;
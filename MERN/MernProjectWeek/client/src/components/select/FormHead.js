import React from "react";
import {Link} from '@reach/router';
import './formhead.css';

const FormHead = (props) => {


    return (
        <div className="formHead">
            <h1>New to the Industry?</h1>
            <hr/>
            <Link to="/users/create">Users</Link>
            <Link to="/business/create">Business</Link>
            <Link to="/login">Login</Link>
            <hr/>
        </div>
    )
}

export default FormHead;
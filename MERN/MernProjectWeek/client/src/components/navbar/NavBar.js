import React from 'react';
import './navbar.css';
import {Link} from '@reach/router';


const NavBar = (props) => {

    const {id} = props;

    return (
        <header>
            <div className="topnav">
                <div>
                    <Link to="/users/create"><h2>Create User</h2></Link>
                </div>
                <div>
                    <Link to="/"><h2>Dashboard</h2></Link>
                </div>
            </div>
        </header>
    )
}

export default NavBar;
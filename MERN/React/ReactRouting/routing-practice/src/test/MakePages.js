import React from 'react';
import {Router, Link} from '@reach/router';
import PageOne from './PageOne';
import PageTwo from './PageTwo';


const MakePages = () => {
    return (
        <div className="App">
        <div>
            <Router>
            <PageOne path="/route-one/"/>
            <PageTwo path="/route-two/"/>
            </Router>
            <Link to = "/dashboard">Dashboard </Link> " "
            <Link to = "/login"> Login</Link>
        </div>
        </div>
    );
}

export default MakePages;

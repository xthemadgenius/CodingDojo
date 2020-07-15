import React from 'react';
import {Link} from '@reach/router';

const PageTwo = () =>{
    return (
        <div>
            This is Page 2
            <hr/>
            <Link to='/'>GO to Page One</Link>
            <br/>
            <Link to = "/dashboard">Dashboard </Link>
            <br/>
            <Link to = "/login"> Login</Link>
        </div>
    )
}

export default PageTwo;
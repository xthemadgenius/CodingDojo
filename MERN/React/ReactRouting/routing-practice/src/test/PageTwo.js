import React from 'react';
import {Link} from '@reach/router';

const PageTwo = () =>{
    return (
        <div>
            This is Page 2
            <hr/>
            <Link to='/route-one'>GO to Page One</Link>
        </div>
    )
}

export default PageTwo;
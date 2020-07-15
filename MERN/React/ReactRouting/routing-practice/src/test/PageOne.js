import React from 'react';
import {Link, navigate} from '@reach/router';

const PageOne = () =>{
    const onClick = e => {
        e.preventDefault();
        navigate('/route-two');
    }
    return (
        <div>
            This is Page 1
            <hr/>
            <Link to='/route-two'>GO to Page Two</Link>
            <br/>
            <button onClick={onClick}>Programmatically Navigate</button>
        </div>
    )
}

export default PageOne;
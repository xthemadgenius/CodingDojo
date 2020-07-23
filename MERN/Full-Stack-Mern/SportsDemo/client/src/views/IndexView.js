import React from 'react';
import DeleteButton from '../components/DeleteButton';
import { Link } from '@reach/router';

const IndexView = (props) => {

    return (
        <div>
            <h1>Athletes</h1>
            <Link to="/create">Create Player</Link>
            <hr/>
            <div>
                <Link to="/5"><h3>John Smith</h3></Link>
                <Link to="/5/edit">Edit</Link>
                <DeleteButton/>
            </div>
        </div>
    )
}

export default IndexView;
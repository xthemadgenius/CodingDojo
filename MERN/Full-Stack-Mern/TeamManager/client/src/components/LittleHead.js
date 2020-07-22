import React from 'react';
import {Link} from '@reach/router';
import {StyledHead} from '../styles/Styles'

export default props => {

    return (
        <StyledHead>
            <Link to="/players/list"><h3>List</h3></Link>
            <h3> | </h3>
            <Link to="/players/addplayer"><h3>Add Player</h3></Link>
        </StyledHead>
    )
}
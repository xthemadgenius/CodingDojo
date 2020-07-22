import React from 'react';
import {Link} from '@reach/router';
import {StyledHead} from '../styles/Styles'

export default props => {

    return (
        <StyledHead>
            <Link to="/players/list"><h2>Manage Players</h2></Link>
            <h2> | </h2>
            <Link to="/status/game/1"><h2>Manage Player Status</h2></Link>
        </StyledHead>
    )
}
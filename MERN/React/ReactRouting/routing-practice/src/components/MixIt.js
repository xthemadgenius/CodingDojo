import React from 'react';

import{Router} from '@reach/router';
import Home from './Home';
import DunDun from './DunDun';
import Closing from './Closing';


const MixIt = () => {
    return (
        <div>
            <Router>
                <Home path="/home/"/>
                <DunDun path="/:id/"/>
                <Closing path="/:id/:color/:bgColor"/>
            </Router>
        </div>
    );
}

export default MixIt;

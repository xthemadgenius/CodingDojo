import React from 'react';
import {Router} from '@reach/router';
import PageOne from './PageOne';
import PageTwo from './PageTwo';


const MakePages = () => {
    return (
        <div className="App">
        <div>
            <Router>
                <PageOne path="/"/>
                <PageTwo path="/route-two/"/>
            </Router>
        </div>
        </div>
    );
}

export default MakePages;

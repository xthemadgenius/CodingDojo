import React from 'react';
import DashHead from '../../components/select/DashHead';
import { Router } from '@reach/router';
import Business from '../../components/ops/Business';
import Users from '../../components/ops/Users';
import Collaborate from '../../components/ops/Collaborate';

const Dashboard = (props) => {

    return (
        <div>
            <DashHead/>
            <Router>
                <Users path="/"/>
                <Collaborate path="/collaborate"/>
                <Business path="/business"/>
            </Router>
        </div>
    )
}

export default Dashboard;
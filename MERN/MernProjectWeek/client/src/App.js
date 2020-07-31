import React from 'react';
import NavBar from './components/navbar/NavBar';
import './App.css';
import {Router} from '@reach/router';
import NewUser from './views/forms/NewUser';
import UserForm from './components/forms/UserForm';
import BusinessForm from './components/forms/BusinessForm';
import LoginForm from './components/forms/LoginForm';
import Dashboard from './views/dashboard/Dashboard';
import Profile from './views/profile/Profile';
import Users from './components/ops/Users';
import Collaborate from './components/ops/Collaborate';
import Business from './components/ops/Business';
import UpdateForm from './views/edit/UpdateForm';
import CollabForm from './components/forms/CollabForm';
import Collab from './views/collab/Collab';
import JobForm from './components/forms/JobForm';
import Jobs from './views/job/Jobs';
import BizPro from './views/profile/BizPro';
import BizEdit from './views/edit/BizEdit';
import NewJobs from './components/ops/NewJobs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Router>
        {/* DashBoard paths */}
        <Dashboard path="/dash"/>
        <Users path="/"/>
        <Collaborate path="/collaborate"/>
        <Business path="/business"/>
        <NewJobs path="/jobs"/>
        {/* New User/ Login Paths */}
        <NewUser path="/create/"/>
        <UserForm path="/users/create"/>
        <BusinessForm path="/business/create"/>
        <LoginForm path="/login"/>
        {/* Profile paths */}
        <Profile path="/users/:id"/>
        <UpdateForm path="/users/:id/edit"/>
        <BizPro path="/business/:id"/>
        <BizEdit path="/business/:id/edit"/>
        {/* New Jobs/ New Collab paths */}
        <CollabForm path="/users/:id/create/collab"/>
        <Collab path="/collaborate/:id"/>
        <JobForm path="/business/:id/create/job"/>
        <Jobs path="/job/:id"/>
      </Router>
    </div>
  );
}

export default App;
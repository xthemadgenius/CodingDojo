import React from 'react';
import FormHead from "../../components/select/FormHead"
import {Router} from '@reach/router';
import UserForm from '../../components/forms/UserForm'
import BusinessForm from '../../components/forms/BusinessForm';
import LoginForm from '../../components/forms/LoginForm';

const NewUser = (props) => {

    return (
        <div>
            <FormHead/>
            <Router>
                <UserForm path="/users/create"/>
                <BusinessForm path="/business/create"/>
                <LoginForm path="/login"/>
            </Router>
        </div>
    )
}
export default NewUser;
import React from 'react';
import FormHead from '../select/FormHead';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from './Styles';

const LoginForm = (props) => {

    return (
        <div>
            <FormHead/>
            <TheForm>
                <h3>Sign In</h3>
                <FormGroup>
                    <FillLabel htmlFor="">Email</FillLabel>
                    <MainInput type="email"/>
                </FormGroup>
                <FormGroup>
                    <FillLabel htmlFor="">Password</FillLabel>
                    <MainInput type="password"/>
                </FormGroup>
                <RoundedBtn type="submit">Login</RoundedBtn>
            </TheForm>
        </div>
    )
}

export default LoginForm;
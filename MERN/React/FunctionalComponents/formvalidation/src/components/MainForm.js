import React from 'react';
import useForm from './useForm';
import userValidation from './UserValidation';
import { TheForm, FillLabel, FormGroup, MainInput, Danger, RoundedBtn } from './Styles';

const MainForm = () => {
    const login = () => {
        console.log("No errors, submit a callback command")
    };
    const {
        values,
        errors,
        handleChange,
        handleSubmit,
    } = useForm(login, userValidation);
    return (
        <div>
            <h2>Make an Account</h2>
            <TheForm onSubmit={handleSubmit} noValidate>
                <FormGroup>
                    <FillLabel>First Name:{" "}</FillLabel>
                    <MainInput className={`input ${errors.firstName && 'is-danger'}`} type="firstName" name="firstName" onChange={handleChange} value={values.firstName || ''} required />
                </FormGroup>
                <FormGroup>
                    <FillLabel>Last Name:{" "}</FillLabel>
                    <MainInput className={`input ${errors.lastName && 'is-danger'}`} type="lastName" name="lastName" onChange={handleChange} value={values.lastName || ''} required />
                </FormGroup>
                <FormGroup>
                    <FillLabel>Email Address:{" "}</FillLabel>
                    <MainInput autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                </FormGroup>
                <FormGroup>
                    <FillLabel>Password:{" "}</FillLabel>
                    <MainInput className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </FormGroup>
                
                <RoundedBtn type="submit">Login</RoundedBtn>

                {errors.firstName && (
                    <Danger>{errors.firstName}</Danger>
                )}
                {errors.lastName && (
                    <Danger>{errors.lastName}</Danger>
                )}
                {errors.email && (
                    <Danger>{errors.email}</Danger>
                )}
                {errors.password && (
                    <Danger>{errors.password}</Danger>
                )}
            </TheForm>
        </div>
    )
}

export default MainForm;
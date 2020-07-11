import React from 'react';

const userValidation = (values) =>{
    let errors = {};
    if (!values.email){
        errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "email address is invalid";
    }
    if (!values.password){
        errors.password = "Password is required";
    }else if (values.passwor.length < 8){
        errors.password = "Passsword must be 8 characters or longer";
    }
    return errors;

    export default userValidation;
}
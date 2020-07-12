import React from 'react';

const userValidation = (values) =>{
    let errors = {};
    // First Name
    if (!values.firstName){
        errors.firstName = "First Name is required";
    }else if (values.firstName.length < 2){
        errors.firstName = "First Name must be 2 characters or longer";
    }
    // Last Name
    if (!values.lastName){
        errors.lastName = "Last Name is required";
    }else if (values.lastName.length < 2){
        errors.lastName = "Last Name must be 2 characters or longer";
    }
    // Email
    if (!values.email){
        errors.email = "Email Address is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)){
        errors.email = "email address is invalid";
    }
    // Password
    if (!values.password){
        errors.password = "Password is required";
    }else if (values.password.length < 8){
        errors.password = "Passsword must be 8 characters or longer";
    }
    return errors;
}
export default userValidation;
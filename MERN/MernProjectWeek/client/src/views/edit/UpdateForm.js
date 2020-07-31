import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {navigate} from '@reach/router';
import { ColForm, TextBox, ColLabel, ColInput, RoundedBtn } from '../../components/forms/Styles';

const UpdateForm = (props) => {

    const {id} = props;
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [company, setCompany] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [skills, setSkills] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/users/${id}`)
        .then(res => {
            setFirstName(res.data.firstName);
            setLastName(res.data.lastName);
            setCompany(res.data.company);
            setPhoneNumber(res.data.phoneNumber);
            setEmail(res.data.email);
            setLocation(res.data.location);
            setSkills(res.data.skills);
        })
        .catch((err) => console.log(err));
    }, [])

    const onSubmitHandler = (e) => {
        e.preventDefault();

        const userEdit = {
            firstName,
            lastName,
            company,
            phoneNumber,
            email,
            location,
            skills
        }

        axios.put(`http://localhost:8000/api/users/${id}`, userEdit)
        .then(res => {
            navigate(`/users/${id}`)
        })
        .catch(err => {
            console.log("catch me")
            console.log(err);;
        });
    }

    return (
        <div>
            <ColForm onSubmit={(e) => {onSubmitHandler(e)}}>
                <h1>{firstName} {lastName}</h1>
                <div>
                    <ColLabel>First Name</ColLabel><br/>
                    <ColInput type="text" value={firstName} onChange={(event) => {setFirstName(event.target.value);}}/>
                </div>
                <div>
                    <ColLabel>Last Name</ColLabel><br/>
                    <ColInput type="text" value={lastName} onChange={(event) => {setLastName(event.target.value);}}/>
                </div>
                <div>
                    <ColLabel>Company Name</ColLabel><br/>
                    <ColInput type="text" value={company} onChange={(event) => {setCompany(event.target.value);}}/>
                </div>
                <div>
                    <ColLabel>Phone Number</ColLabel><br/>
                    <ColInput type="number" value={phoneNumber} onChange={(event) => {setPhoneNumber(event.target.value);}}/>
                </div>
                <div>
                    <ColLabel>Email</ColLabel><br/>
                    <ColInput type="email" value={email} onChange={(event) => {setEmail(event.target.value);}}/>
                </div>
                <div>
                    <ColLabel>Location</ColLabel><br/>
                    <ColInput type="text" value={location} onChange={(event) => {setLocation(event.target.value);}}/>
                </div>
                <div>
                    <ColLabel>Skills</ColLabel><br/>
                    <TextBox value={skills} onChange={(event) => {setSkills(event.target.value);}}></TextBox>
                </div>
                <RoundedBtn type="submit">Update</RoundedBtn>
            </ColForm>
        </div>
    )
}

export default UpdateForm;
import React, { useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";
import FormHead from '../select/FormHead';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from './Styles';

const BusinessForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [company, setCompany] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      firstName,
      lastName,
      company,
      phoneNumber,
      email,
      location,
      password,
      confirmPassword,
    };

    axios
      .post("http://localhost:8000/api/business", newUser)
      .then((res) => {
        navigate("/business");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <FormHead />
      <TheForm
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <FormGroup>
          <FillLabel htmlFor="">First Name</FillLabel>
          <MainInput
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            type="text"
            value={firstName}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Last Name</FillLabel>
          <MainInput
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            type="text"
            value={lastName}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Company:</FillLabel>
          <MainInput
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            type="text"
            value={company}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Phone Number</FillLabel>
          <MainInput
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
            type="number"
            value={phoneNumber}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Email</FillLabel>
          <MainInput
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            value={email}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Location</FillLabel>
          <MainInput
            onChange={(e) => {
              setLocation(e.target.value);
            }}
            type="text"
            value={location}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Password</FillLabel>
          <MainInput
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            value={password}
          />{" "}
        </FormGroup>
        <FormGroup>
          <FillLabel htmlFor="">Confirm Password</FillLabel>
          <MainInput
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
            type="password"
            value={confirmPassword}
          />{" "}
        </FormGroup>
        <RoundedBtn>Add Member</RoundedBtn>
      </TheForm>
    </div>
  );
};

export default BusinessForm;

import React from 'react';
import { ColForm, TextBox, ColLabel, ColInput, RoundedBtn } from './Styles';

const JobForm = (props) => {

    return (
        <div>
            <ColForm>
            <h2>Create a Job Opening</h2>
                <div>
                    <ColLabel>Job Title</ColLabel><br/>
                    <ColInput type="text"/>
                </div>
                <div>
                    <ColLabel>Programming Languages Required</ColLabel><br/>
                    <ColInput type="text"/>
                </div>
                <div>
                    <ColLabel>Job Info</ColLabel><br/>
                    <TextBox name="" id="" cols="30" rows="10"></TextBox>
                </div>
                <div>
                    <ColLabel>Job Pre-Requistes</ColLabel><br/>
                    <TextBox name="" id="" cols="30" rows="10"></TextBox>
                </div>
                <div>
                    <ColLabel>Job Perks</ColLabel><br/>
                    <TextBox name="" id="" cols="30" rows="10"></TextBox>
                </div>
                <RoundedBtn>Create Collab</RoundedBtn>
            </ColForm>
        </div>
    )
}

export default JobForm;
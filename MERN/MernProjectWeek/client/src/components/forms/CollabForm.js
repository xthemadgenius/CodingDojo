import React from 'react';
import { ColForm, TextBox, ColLabel, ColInput, RoundedBtn } from './Styles';

const CollabForm = (props) => {

    return (
        <div>
            <ColForm>
            <h2>Start a Collaboration</h2>
                <div>
                    <ColLabel>Project Name</ColLabel><br/>
                    <ColInput type="text"/>
                </div>
                <div>
                    <ColLabel>Project Info</ColLabel><br/>
                    <TextBox name="" id="" cols="30" rows="10"></TextBox>
                </div>
                <RoundedBtn>Create Collab</RoundedBtn>
            </ColForm>
        </div>
    )
}

export default CollabForm;
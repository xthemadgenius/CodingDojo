import React, {useState} from 'react';
import {navigate} from '@reach/router';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../styles/Styles';

export default props => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <div>
            <TheForm onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FillLabel>Name</FillLabel>
                    <MainInput type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </FormGroup>
                <RoundedBtn type="submit">Submit</RoundedBtn>
            </TheForm>
            <RoundedBtn onClick={()=> navigate("/")}>Cancel</RoundedBtn>
        </div>
    )
}
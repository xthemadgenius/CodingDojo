import React, { useContext } from 'react';
import FormContext from '../context/FormContext';
import { TheForm, FillLabel, FormGroup, MainInput } from './Styles';

const Form = () => {
    const [userName, setUserName] = useContext(FormContext);

    return (
        <TheForm>
            <FormGroup>
                <FillLabel>Your Name:{" "}</FillLabel>
                <MainInput value={userName} onChange={e => setUserName(e.target.value)}/>
            </FormGroup>
        </TheForm>
    )
}

export default Form;
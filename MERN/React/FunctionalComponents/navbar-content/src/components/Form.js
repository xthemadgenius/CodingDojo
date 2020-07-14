import React, { useContext } from 'react';
import FormContext from '../context/FormContext';
import { TheForm, FillLabel, FormGroup, MainInput } from './Styles';

export default () => {
    const { name, setName } = useContext(FormContext);

    return (
        <TheForm>
            <FormGroup>
                <FillLabel>Your Name:{" "}</FillLabel>
                <MainInput value={name} onChange={e => setName(e.target.value)}/>
            </FormGroup>
        </TheForm>
    )
}
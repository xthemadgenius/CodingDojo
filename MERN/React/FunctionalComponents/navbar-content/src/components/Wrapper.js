import React, { useState } from 'react';
import FormContext from '../context/FormContext';

export default ({ children }) => {
    const [name, setName] = useState("John Doe");

    return (
        <FormContext.Provider value={{ name, setName }}>
            {children}
        </FormContext.Provider>
    )
}
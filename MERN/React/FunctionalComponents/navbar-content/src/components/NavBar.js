import React, { useContext } from 'react';
import FormContext from '../context/FormContext';
import {Navbar} from './Styles'


export default () => {
    const { name } = useContext(FormContext);
    return <Navbar>Hi {name}!</Navbar>;
};
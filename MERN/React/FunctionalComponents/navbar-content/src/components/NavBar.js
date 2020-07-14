import React, { useContext } from 'react';
import FormContext from '../context/FormContext';
import {Navbar} from './Styles'


const NavBar = () => {
    const { name } = useContext(FormContext);
    return <Navbar>Hi {name}!</Navbar>;
};

export default NavBar;
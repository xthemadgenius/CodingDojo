import React from 'react';
import PetForm from '../components/PetForm';
import { Link } from '@reach/router';

const EditPet = (props) => {

    return (
        <div>
            <h1>Edit PETNAME</h1>
            <Link to="/">Back to home</Link>
            <PetForm/>
        </div>
    )
}
export default EditPet;
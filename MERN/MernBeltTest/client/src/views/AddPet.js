import React from 'react';
import PetForm from '../components/PetForm';
import { Link } from '@reach/router';

const AddPet = (props) => {

    return (
        <div>
            <h1>Know a Pet needing a Home</h1>
            <Link to="/">Back to home</Link>
            <PetForm/>
        </div>
    )
}
export default AddPet;
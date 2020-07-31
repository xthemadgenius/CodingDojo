import React, {useState, useEffect} from 'react';
import {Link} from '@reach/router';
import '../styles/pet.module.css';
import axios from 'axios'

const PetDashboard = (props) => {

    const [pets, setPets] =useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/belts')
        .then((res) => setPets(res.data))
        .catch((err) => console.log(err));
    },[])

    return (
        <div>
            <h1>These pets are looking for a good home</h1>
            <Link to="/pets/new">add a pet to the Shelter</Link><br/><br/>
            <table>
                <tbody>
                    <tr>
                        <td><h3>Name</h3></td>
                        <td><h3>Type</h3></td>
                        <td><h3>Actions</h3></td>
                    </tr>
                    {pets.sort((pez,index) => (pez.petType.toLowerCase() > index.petType.toLowerCase()) ? 1 : -1).map((pet, idx) => {
                        return (
                            <tr>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td><Link to={`/pets/${pet._id}`}>details</Link> | <Link to={`/pets/${pet._id}/edit`}>edit</Link></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PetDashboard;
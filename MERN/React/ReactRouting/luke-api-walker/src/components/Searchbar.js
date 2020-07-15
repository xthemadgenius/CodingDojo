import React, { useState } from 'react';
import {navigate} from '@reach/router';
import { SLabel, SForm, SSelect, SInput, SBox, SBtn } from '../styles/SearchStyles';

const Searchbar = (props) => {
    const [search, setSearch] = useState({
        category: "people",
        id:"",
    });
    const onChange = (e) => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value,
        });
    };
    const onSubmit = (e) => {
        e.preventDefault();
        navigate(`/${search.category}/${search.id}`) 
    }
    return (
        <div>
            <h1>Luke API Walker</h1>
            <SForm onSubmit={onSubmit}>
                <div>
                    <SLabel>Search For:</SLabel>
                    <SSelect name="category" onChange={onChange}>
                        <option value="people">People</option>
                        <option value="planets">Planets</option>
                        <option value="starships">Spaceships</option>
                        <option value="vehicles">Vehicles</option>
                        <option value="species">Species</option>
                        <option value="films">Films</option>
                    </SSelect>
                </div>
                <SBox>
                    <SLabel>ID:</SLabel>
                    <SInput type="number" name="id" onChange={onChange}/>
                </SBox>
                <div>
                    <SBtn type="submit">Submit</SBtn>
                </div>
            </SForm>
        </div>
    )

}

export default Searchbar;
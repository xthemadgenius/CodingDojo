import React from 'react';
import styles from './People.module.css';

const People = (props) =>{
    return (
    <div>
        <h1>{props.lastName} {props.firstName}</h1>
        <h1>{props.age}</h1>
        <h1>{props.hairColor}</h1>
    </div>
    );
}
export default People;
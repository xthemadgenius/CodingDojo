import React, {useState} from 'react';
import axios from 'axios';

export default props => {
    const {initialFirstName, initialLastName, onSubmitProp} = props;
    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    
    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({firstName, lastName});
    }
    return (
        <form onSubmit={onSubmitHandler}>
            <div>
                <label>First Name</label><br/>
                <input type="text" name="firstName" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
            </div>
            <div>
                <label>Last Name</label><br/>
                <input type="text" name="lastName" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
            </div>
            <input type="submit"/>
        </form>
    )
}
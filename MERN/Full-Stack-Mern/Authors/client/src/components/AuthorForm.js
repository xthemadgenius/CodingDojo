import React, {useState} from 'react';
import {navigate} from '@reach/router';

export default props => {
    const {initialName, onSubmitProp} = props;
    const [name, setName] = useState(initialName);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({name});
    }
    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                <div>
                    <label >Name</label>
                    <input type="text" value={name} onChange={(e) => {setName(e.target.value)}}/>
                </div>
                <input type="submit"/>
            </form>
            <button onClick={()=> navigate("/")}>Cancel</button>
        </div>
    )
}
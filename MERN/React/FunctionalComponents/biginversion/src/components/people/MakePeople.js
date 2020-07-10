import React, {useState} from 'react';
import People from './People';

const MakePeople = (props) =>{
    const [people, setPeople] = useState(props.people);
    const handleDelete = (delIdx) => {
        const filteredPeople = people.filter((peoples, idx) => {
            return delIdx !== idx;
        });
    
        setPeople(filteredPeople);
    };
    return (
        <div>
            {people.map((peopleStr, idx)=>{
                return (
                    <div key={idx}>
                        <hr/>
                        <People>{peopleStr}</People>{" "}
                        <button
                            onClick={(event) => {
                                handleDelete(idx);
                            }}
                            >
                            Delete
                        </button>
                    </div>
                );
            })}
            
        </div>
    );
};
export default MakePeople;
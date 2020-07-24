import React from 'react';

const PetForm = (props) => {

    return (
        <div>
            <form>
                <div>
                    <label >Pet Name:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label >Pet Name:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label >Description:</label>
                    <input type="text"/>
                </div>
                <h2>Skills(Optional):</h2>
                <div>
                    <label >Skill 1:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input type="text"/>
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input type="text"/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default PetForm;
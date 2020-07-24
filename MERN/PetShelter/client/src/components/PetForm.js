import React, {useState} from 'react';

const PetForm = (props) => {

    const {onSubmitHandler,
        initialName, 
        initialPetType,
        initialDescription,
        initialSkill1,
        initialSkill2,
        initialSkill3
    } = props;

    const [name, setName] = useState(initialName);
    const [petType, setPetType] = useState(initialPetType);
    const [description, setDescription] = useState(initialDescription);
    const [skill1, setSkill1] = useState(initialSkill1);
    const [skill2, setSkill2] = useState(initialSkill2);
    const [skill3, setSkill3] = useState(initialSkill3);

    return (
        <div>
            <form onSubmit={(e) => {
                onSubmitHandler(e, 
                    {
                        name,
                        petType,
                        description,
                        skill1,
                        skill2,
                        skill3
                    }
                )
            }}>
                <div>
                    <label >Pet Name:</label>
                    <input 
                    type="text"
                    name="name"
                    value={name}
                    onChange={e => {setName(e.target.value)}}/>
                </div>
                <div>
                    <label >Pet Type:</label>
                    <input 
                    type="text"
                    name="petType"
                    value={petType}
                    onChange={e => {setPetType(e.target.value)}}/>
                </div>
                <div>
                    <label >Description:</label>
                    <input 
                    type="text"
                    name="description"
                    value={description}
                    onChange={e => {setDescription(e.target.value)}}/>
                </div>
                <h2>Skills(Optional):</h2>
                <div>
                    <label >Skill 1:</label>
                    <input 
                    type="text"
                    name="skill1"
                    value={skill1}
                    onChange={e => {setSkill1(e.target.value)}}/>
                </div>
                <div>
                    <label>Skill 2:</label>
                    <input 
                    type="text"
                    name="skill2"
                    value={skill2}
                    onChange={e => {setSkill2(e.target.value)}}/>
                </div>
                <div>
                    <label>Skill 3:</label>
                    <input 
                    type="text"
                    name="skill3"
                    value={skill3}
                    onChange={e => {setSkill3(e.target.value)}}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default PetForm;
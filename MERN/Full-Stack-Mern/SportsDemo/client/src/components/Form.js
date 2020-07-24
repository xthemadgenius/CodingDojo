import React, {useState} from 'react';

const Form = (props) => {
    const {onSubmitHandler, initialFirstName, initialLastName, initialSport, initialTeam} = props;

    const [firstName, setFirstName] = useState(initialFirstName);
    const [lastName, setLastName] = useState(initialLastName);
    const [sport, setSport] = useState(initialSport);
    const [team, setTeam] = useState(initialTeam);

    return (
        <div>
            <form onSubmit={e => {onSubmitHandler(e, {firstName, lastName, sport, team})}}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" value={firstName} onChange={e => {setFirstName(e.target.value)}}/>
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" value={lastName} onChange={e => {setLastName(e.target.value)}}/>
                </div>
                <div>
                    <label>Sport</label>
                    <input type="text" name="sport" value={sport} onChange={e => {setSport(e.target.value)}}/>
                </div>
                <div>
                    <label>Team</label>
                    <input type="text" name="team" value={team} onChange={e => {setTeam(e.target.value)}}/>
                </div>
                <input type="submit"/>
            </form>
        </div>
    )
}

export default Form;
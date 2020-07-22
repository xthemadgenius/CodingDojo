import React, {useState} from 'react';
import { TheForm, FillLabel, FormGroup, MainInput, RoundedBtn } from '../styles/Styles';

export default props => {
    const {newPlayer, setNewPlayer, onSubmitProp} = props;
    const [name, setName] = useState("");
    const [position, setPosition] = useState("");
    const [game1, setGame1] = useState(0);
    const [game2, setGame2] = useState(0);
    const [game3, setGame3] = useState(0);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        onSubmitProp({
            name,
            position,
            game1,
            game2,
            game3
        })
    }

    return (
        <div>
            <TheForm onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FillLabel>Name:</FillLabel>
                    <MainInput type="text" onChange={(e) => setName(e.target.value)}/>
                </FormGroup>
                <FormGroup>
                    <FillLabel>Position:</FillLabel>
                    <MainInput type="text" onChange={(e) => setPosition(e.target.value)}/>
                </FormGroup>
                <RoundedBtn type="submit">Submit</RoundedBtn>
            </TheForm>
        </div>
    )
}
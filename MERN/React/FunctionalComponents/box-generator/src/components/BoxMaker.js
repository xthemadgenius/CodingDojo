import React, { useState } from 'react';
import { TheForm, FormGroup, FillLabel, MainInput, RoundedBtn } from './FormStyles';
import { BoxSetUp, Colorful } from './BoxStyle';

import BoxPlace from './BoxPlace';

const BoxMaker = (props) => {
    const [colorful, setColorful] = useState({color: ""});
    const [lengthLimit, setLengthLimit] = useState({length: ""});
    const [boxState, setBoxState] = useState({boxes: []});

    const onChangeHandler = e => {
        setColorful({
            ...colorful,
            [e.target.name]: e.target.value
        })
        setLengthLimit({
            ...lengthLimit,
            [e.target.name]: e.target.value
        })
    }

    const onSubmitHandler = e => {
        e.preventDefault();

        const box = [colorful.color, lengthLimit.length];

        let boxesCopy = boxState.boxes.slice();
        boxesCopy.push(box);

        setBoxState({
            boxes: boxesCopy
        });
        setColorful({
            color: ""
        });
        setLengthLimit({
            length: ""
        });
    }
    return (
        <div>
            <TheForm onSubmit={onSubmitHandler}>
                <FormGroup>
                    <FillLabel htmlFor="color">Color:</FillLabel>
                    <MainInput type="text" name="color" value={colorful.color} onChange={onChangeHandler} />
                </FormGroup>
                <FormGroup>
                    <FillLabel htmlFor="length">Length:</FillLabel>
                    <MainInput type="number" name="length" value={lengthLimit.length} onChange={onChangeHandler} />
                </FormGroup>
                <RoundedBtn type="submit">Add Box</RoundedBtn>
            </TheForm>
            <BoxPlace box={boxState}/>
        </div>
    );
}

export default BoxMaker;
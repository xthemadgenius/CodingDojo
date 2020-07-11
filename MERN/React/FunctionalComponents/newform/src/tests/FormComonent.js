import React from 'react';
import {ItalicWord, BoldWord} from './Styles';

const FormComonent = (props) => {

    return (
        <div>
            <ItalicWord>Name: {props.quote.author}</ItalicWord>
            <BoldWord>{props.quote.text}</BoldWord>
            <ItalicWord bgColor="orange">Age: {props.quote.age}</ItalicWord>
            <BoldWord>{props.quote.box}</BoldWord>
        </div>
    );
};

export default FormComonent;
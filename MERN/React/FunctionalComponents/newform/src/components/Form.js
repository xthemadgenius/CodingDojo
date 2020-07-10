import React from 'react';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import MakeComment from './MakeComment';

const Form = () =>{
    return (
        <div>
        <MakeComment bgColor="red">Howdy</MakeComment>
        <FontAwesomeIcon icon={faThumbsUp} />
        <MakeComment bgColor="red"><FontAwesomeIcon icon={faThumbsUp}/></MakeComment>
        </div>
    )
}

export default Form;
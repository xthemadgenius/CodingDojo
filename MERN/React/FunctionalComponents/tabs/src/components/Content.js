import React from 'react';
import { Information, Info } from './Styles';

const Content = (props) => {
    return (
        <Information style={{backgroundColor: props.data.color}}>
            <Info>{props.data.content}</Info> 
        </Information>
    )
}
export default Content;
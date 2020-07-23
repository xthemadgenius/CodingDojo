import React from 'react';
import {css} from 'emotion';
import {BigName, LittleText} from '../styles/Styles';

const MessageBubble = props => {
    const msg = props.message.msg;
    const msgSender = props.message.user;
    const userName = props.user;

    var bgColor ="";
    var align = "";

    if(msgSender === userName) {
        bgColor = "#07D";
        align = "right";
    } else {
        bgColor = "#65B045"
        align = "left";
    }

    return(
        <div className={css`
            height: auto;
            width: 300px;
            padding: 5px;
            background-color: ${bgColor};
            float: ${align};
            clear: both;
            margin-${align}: 20px;
            border-radius: 20px;
        `}>
            <BigName>{msgSender}</BigName>
            <LittleText>{msg}</LittleText>
        </div>
    );
}

export default MessageBubble;
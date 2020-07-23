import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
import Message from './Message';

const Chat = (props) => {
    const [userName, setUserName] = useState("");
    const [hasName, setHasName] = useState(false);
    const [messages, setMessages] = useState([]);
    const [currMessage, setCurrMessage] = useState("");
    
    const [socket] = useState( () => io(":8000") );

    const onSubmitHandler = e => {
        e.preventDefault();
        socket.emit("new_message_from_client", {user: userName, msg: currMessage});
        setMessages([...messages, {user: userName, msg: currMessage}]);
        setCurrMessage("");
    };

    const onNameSubmitHandler = e => {
        e.preventDefault();
        socket.emit("new_user_connecting", userName);
        setHasName(true);
    };

    useEffect( () => {
        socket.on("send_message_to_all_other_clients", msg => 
            setMessages(sentMsg => {
                return [...sentMsg, msg];
            })
        );
        socket.on("new_user_announcement", msg => 
            setMessages(sentMsg => {
                return [...sentMsg, {user: "", msg: msg}];
            })
        )
    }, []);

    const renderContent = () => {
        if (hasName === false) {
            return(
                <div>
                    <form onSubmit={onNameSubmitHandler}>
                        <label>Name: </label>
                        <input type="text" onChange={(e) => {
                            setUserName(e.target.value);
                            }}/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            );
        } else {
            return(
                <div>
                    <h3>{userName}</h3>
                    <div>
                    {messages.map( (message, idx) => {
                        return(
                                <Message key={idx} message={message} user={userName}/>
                        );
                    } )}
                    </div>
                    <form onSubmit={onSubmitHandler}>
                        <input type="text"  onChange={ (e) => setCurrMessage(e.target.value) } value={currMessage}/>
                        <input type="submit" value="Send"/>
                    </form>
                </div>
            );
        }
    };

    return(
        <div>
            {renderContent()}
        </div>
    );
};

export default Chat;
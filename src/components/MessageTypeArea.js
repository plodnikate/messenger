import React from "react";
import {useRef} from 'react';
import sent from "../img/sent-button.png"

const MessageTypeArea = (props) => {
    const ref = useRef(null);
    console.log(props)
    const sentMessage = () => {
        if (ref.current.value.trim()) {
            props.handleChats(ref.current.value, props.chatId, true)
            ref.current.value = '';
        }
        };
    return (
    <div className="message-type-area">
        <textarea className="textarea-style" ref={ref} placeholder="Type your message"></textarea>
        <img className="sent-button" onClick={sentMessage} src={sent}/>
    </div>
)}

export default MessageTypeArea;
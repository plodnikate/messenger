import React from "react";
import {useRef} from 'react';
import send from "../img/sent-button.png"

const MessageTypeArea = (props) => {
    const ref = useRef(null);
    const sendMessage = () => {
        if (ref.current.value.trim()) {
            props.handleChats(ref.current.value, props.chatId, true)
            ref.current.value = '';
        }
        };
    return (
    <div className="message-type-area">
        <textarea className="textarea-style" ref={ref} placeholder="Type your message"></textarea>
        <img className="send-button" onClick={sendMessage} src={send} alt="btn-send"/>
    </div>
)}

export default MessageTypeArea;
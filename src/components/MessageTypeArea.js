import React from "react";
import {useRef} from 'react';

const MessageTypeArea = (props) => {
    const ref = useRef(null);
    console.log(props)
    const sentMessage = () => {
        props.handleChats(ref.current.value, props.chatId, true)
        ref.current.value = '';
        };
    return (
    <div>
        <textarea ref={ref} rows="4" cols="50"></textarea>
        <button onClick={sentMessage}>sent</button>
    </div>
)}

export default MessageTypeArea;
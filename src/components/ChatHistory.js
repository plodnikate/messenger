import React from "react";
import OneMessage from "./OneMessage";
import {v4} from 'uuid';

const ChatHistory = (props) =>{
    console.log(props)
return (
    <div>
        
        { props.history.map((message) => {
            return <OneMessage key={v4()} message={message} /> })}
    </div>
)}

export default ChatHistory;
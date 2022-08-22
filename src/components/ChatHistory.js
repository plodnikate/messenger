import React, { useEffect, useRef } from "react";
import OneMessage from "./OneMessage";
import UserAvatar from "./UserAvatar";
import {v4} from 'uuid';

const ChatHistory = (props) =>{
const ref = useRef(null);

useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
})

return (
    <div className="chat-hisrory-wrapper">
        {props.history.map((message) => {
            const fromMe = message.fromMe
            return (
                <div key={v4()} className="message-container">
                    {!fromMe && <UserAvatar avatar={props.avatar} fromMe = {fromMe}/>}
                    <OneMessage
                        message={message}
                        fromMe={fromMe}
                    />
                </div>
            )
            })
        }
         <div ref={ref} />
    </div>
)}

export default ChatHistory;
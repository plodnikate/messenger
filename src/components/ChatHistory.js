import React from "react";
import OneMessage from "./OneMessage";
import UserAvatar from "./UserAvatar";
import {v4} from 'uuid';

const ChatHistory = (props) =>{
return (
    <div>
        {props.history.map((message) => {
            const fromMe = message.fromMe
            return (
                <div key={v4()} className="message-container">
                    {!fromMe && <UserAvatar avatar={props.avatar} fromMe = {fromMe}/>}
                    <OneMessage message={message} fromMe = {fromMe}/>
                </div>
            )
            })
        }
    </div>
)}

export default ChatHistory;
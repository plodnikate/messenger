import React from "react";
import MessageTypeArea from "./MessageTypeArea";
import ChatHistory from "./ChatHistory";
import UserName from "./UserName";
import UserAvatar from "./UserAvatar";

const MainPanel = (props) => {
return (
    <div className="main-panel">
        <div className="chats-header">
            <UserAvatar avatar={props.avatar}/>
            <UserName name={props.name}/>
        </div>
            <div className="chats-history-container">
            <ChatHistory history = {props.history} avatar={props.avatar}/>
            <MessageTypeArea chatId={props.chatId} handleChats = {props.handleChats}/>
        </div>
        
        
    </div>
)}

export default MainPanel;
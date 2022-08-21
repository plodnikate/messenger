import React from "react";
import MessageTypeArea from "./MessageTypeArea";
import ChatHistory from "./ChatHistory";
import UserName from "./UserName";

const MainPanel = (props) => {
return (
    <div>
        <UserName name={props.name}/>
        <br/>
        <ChatHistory history = {props.history}/>
        <br/>
        <MessageTypeArea chatId={props.chatId} handleChats = {props.handleChats}/>
        
        
    </div>
)}

export default MainPanel;
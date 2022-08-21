import React from "react";
import OneChat from "./OneChat";

const Chats = (props) =>{

return(
    <div className="chats-container">
        <div className="chats-title-style one-chat-style" >
            <div>Chats</div>
        </div> 
        { props.chatsInfo.map((chatsInfo) => {
            return <OneChat key={chatsInfo.id} oneChatInfo={chatsInfo} handleChatId = {props.handleChatId}/> })}
    </div>
)
}

export default Chats;
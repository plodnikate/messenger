import React from "react";
import OneChat from "./OneChat";

const Chats = (props) =>{

return(
    <div>
        <div>Chats</div> <br/>
        { props.chatsInfo.map((chatsInfo) => {
            return <OneChat key={chatsInfo.id} oneChatInfo={chatsInfo} handleChatId = {props.handleChatId}/> })}
    </div>
)
}

export default Chats;
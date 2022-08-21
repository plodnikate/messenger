import React from "react";
import Chats from "./Chats";


const ChatsList = (props) =>{
    const chatsInfo = props.chats.map((chat)=>{
        const message = chat.messages[chat.messages.length - 1]
        return {
            id: chat.id,
            name: chat.name,
            lastMessage: message.text,
            time: message.time,
            avatar:chat.src
        }
    })

    chatsInfo.sort((a,b) => b.time - a.time)

    const searchedChatsInfo = chatsInfo.filter((contact)=>{
        return contact.name.toLowerCase().includes(props.searchValue.toLowerCase())
    });


return(
    <div>
        <Chats chatsInfo = {searchedChatsInfo} handleChatId = {props.handleChatId}/>
    </div>
)
}

export default ChatsList;
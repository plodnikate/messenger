import React from "react";
import Moment from "moment";
import UserAvatar from "./UserAvatar";

const OneChat = (props) => {
    const name = props.oneChatInfo.name
    const lastMessage = props.oneChatInfo.lastMessage
    const lastMessageDate = Moment( props.oneChatInfo.time).format('MMM DD, yy')
    const id = props.oneChatInfo.id

    return(
        <div className="one-chat" >
            <div className="one-chat-style" onClick={() => props.handleChatId(id)}>
            <UserAvatar avatar={props.oneChatInfo.avatar}/>
            <div>
                <div className="massage-name-style">{name}</div>
                <div className="message-text-style">
                   <p>{lastMessage}</p>
                </div>
            </div>
                <div className="date">{lastMessageDate}</div>
            </div>
        </div>
    )
}

export default OneChat;
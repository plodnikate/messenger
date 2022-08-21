import React from "react";
import Moment from "moment";

const OneChat = (props) => {
    // console.log(props.handleUserClick)

    const name = props.oneChatInfo.name
    const lastMessage = props.oneChatInfo.lastMessage
    const lastMessageDate = Moment( props.oneChatInfo.time).format('MMM DD, yy')
    const id = props.oneChatInfo.id

    return(
        <div>
            <div onClick={() => props.handleChatId(id)}>{name}<br/>{lastMessage}<br/>{lastMessageDate}</div><br/><br/>
        </div>
    )
}

export default OneChat;
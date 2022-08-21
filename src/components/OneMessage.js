import React from "react";
import Moment from "moment";

const OneMessage = (props) =>{

    const text = props.message.text
    const time = Moment(props.message.time).format("M/D/H,h:mm A")
    const fromMe = props.fromMe

    return(
        <div className="container">
            {fromMe ? <div className="message-text from-me">{text}</div> : <div className="message-text not-from-me">{text}</div>}
            {fromMe ? <div className="time-from-me message-time">{time}</div> : <div className="time-not-from-me message-time">{time}</div>}
        </div>
    )

}

export default OneMessage;
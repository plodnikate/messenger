import React from "react";
import Moment from "moment";

const OneMessage = (props) =>{

    const text = props.message.text
    const time = Moment(props.message.time).format("M/D/H,h:mm A")

    return(
        <div>
            <div>{text}<br/>{time}</div><br/><br/>
        </div>
    )

}

export default OneMessage;
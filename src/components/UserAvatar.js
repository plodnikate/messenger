import React from "react";

const UserAvatar = (props) =>{
    console.log(props.avatar)
    return(
        <div className="photo">
            <img className="person-photo" src={props.avatar}/>
        </div>
    )
}
export default UserAvatar;
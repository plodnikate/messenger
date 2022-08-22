import React from "react";

const UserAvatar = (props) =>{
    return(
        <div className="photo">
            <img className="person-photo" src={props.avatar} alt='avatar'/>
        </div>
    )
}
export default UserAvatar;
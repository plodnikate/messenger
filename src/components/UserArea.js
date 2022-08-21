import React from "react";
import SearchBar from "./Search";
import UserAvatar from "./UserAvatar";
import me from "../img/avatars/me.png";

const UserArea=(props)=>{
    return(
        <div className="user-area-container">
            <div><UserAvatar avatar={me}/></div>
            <div>
                <SearchBar {...props} />
            </div>
        </div>
    )
}

export default UserArea;
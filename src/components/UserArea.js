import React from "react";
import SearchBar from "./Search";

const UserArea=(props)=>{
    return(
        <div className="user-name">
            <SearchBar {...props} />
        </div>
    )
}

export default UserArea;
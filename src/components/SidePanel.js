import React, {useState} from "react";
import UserArea from "./UserArea";
 import ChatsList from "./ChatsList";

const SidePanel = (props) => {
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value)
    }

    const handleClearClick = () =>{
        setSearchValue('')
    }

    return (
        <div>
            <UserArea {...{searchValue, handleInputChange, handleClearClick}} />
            <ChatsList searchValue = {searchValue} handleChatId = {props.handleChatId} chats = {props.chats}/>
        </div>
    )
}

export default SidePanel;
import React, {useState} from "react";
import UserArea from "./UserArea";
 import ChatsList from "./ChatsList";

const SidePanel = (props) => {
    console.log(props)
    const [searchValue, setSearchValue] = useState('')

    const handleInputChange = (event) =>{
        setSearchValue(event.target.value)
    }

    const handleClearClick = () =>{
        setSearchValue('')
    }

    return (
        <div className="side-panel-style">
            <UserArea {...{searchValue, handleInputChange, handleClearClick}} />
            <ChatsList searchValue = {searchValue} handleChatId = {props.handleChatId} chats = {props.chats}/>
        </div>
    )
}

export default SidePanel;
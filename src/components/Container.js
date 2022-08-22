import React, { useState, useEffect, useRef } from "react";
import SidePanel from "./SidePanel";
import MainPanel from "./MainPanel";
import {v4} from 'uuid';
import chatsInitData from "../init_data/chats";
import "../style/global.css";
import NotificationSound from "../notification-sound.mp3"

const Container = () => {
    const [needAnswer, setNeedAnswer] = useState(null)
    const [chatId, setChatId] = useState(null)
    
    const [chats, setChats] = useState(() => {
        const chatsStorageData = localStorage.getItem("chats");
        if (chatsStorageData) {
            return JSON.parse(chatsStorageData);
        }

        return chatsInitData;
    }) 
    const audioPlayer = useRef(null);
      const playAudio = () =>{
        audioPlayer.current.play();
      }
    const getAnswer = (chatId) => {
        fetch("https://api.chucknorris.io/jokes/random")
            .then((res) => res.json())
            .then((res) => {
                setTimeout(() => {
                    handleChats(res.value, chatId, false);
                    playAudio()
                }, 13000);
            });
    };

    const handleChatId = (id) =>{
        setChatId(id)
    }

    useEffect(() => {
        if (needAnswer) {
            getAnswer(needAnswer);
            setNeedAnswer(null);
        }
        // eslint-disable-next-line
    }, [needAnswer]);

    useEffect(() => {
        localStorage.setItem("chats", JSON.stringify(chats));
    }, [chats]);

    const handleChats = (newMessageText, chatId, fromMe) => {
        const newMessage = {
            id: v4(),
            text: newMessageText,
            time: Date.now(),
            fromMe
        };
        
        const updatedChats = chats.map((chat) => {
            const updatedChat = {
                ...chat,
                messages: [
                    ...chat.messages
                ]
            };
            
            if (updatedChat.id === chatId) {
                updatedChat.messages.push(newMessage);
            }

            return updatedChat;
        });

        
        setChats(updatedChats);
        if (fromMe) {
            setNeedAnswer(chatId);
        }
    }
    const selectedUser = chats.find(chat => chat.id === chatId)
    return (
    <div className="container-style">
        <SidePanel className="side-panel-container" chats={chats} handleChatId={handleChatId} />  
        {chatId  ? <MainPanel handleChats={handleChats} chatId={chatId} history={selectedUser.messages} name={selectedUser.name} avatar={selectedUser.src}/> : <div className="init-main-panel-container"><div> No select chat yet</div></div>  }
        <audio ref={audioPlayer} src={NotificationSound} />
    </div>
    )
}

export default Container;


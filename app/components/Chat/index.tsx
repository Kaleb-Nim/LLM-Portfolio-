import {Input} from "./Input"
import React, { useState } from 'react';
import {MessageBox} from "./MessageBox"
import {Message} from "ai"

// Main chat component to be rendered 

interface ChatProps {
    userInput : string | null;
    messages: Message[];
    sendMessage: () => void;
    setUserInput: (userInput: string | null) => void
}

export const Chat: React.FC<ChatProps> = ({ userInput,messages, sendMessage,setUserInput }) => {



    return (
        <div className="chat ">
            <MessageBox messages={messages}/>
            <Input
                userInput={userInput}
                setUserInput={setUserInput}
                sendMessage={sendMessage}
            />
        </div>
    )
}
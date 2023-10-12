"use client"

import {Input} from "./components/Chat/Input"
import React, { useState } from 'react';
import {Chat} from "./components/Chat/index"
import {Message} from "ai"

// Main page for the chat app

const Page: React.FC = () => {
  const [userInput, setUserInput] = useState<string | null >(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const sendMessage = () => {
    // Send message to server
    console.log(userInput);
    setUserInput("")
    // Add message to messages array
    if (userInput)
    setMessages([...messages, {content: userInput, role: "user",id:"dwa"}])
  }
    return (
        <div className="page">
            <h1>Chat App</h1>
            <Chat
                messages={messages}
                userInput={userInput}
                setUserInput={setUserInput}
                sendMessage={sendMessage}
            />
        </div>
    )
}

export default Page;
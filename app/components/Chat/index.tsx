import React, { useState } from 'react';
import MessageBox from "./MessageBox"
import {Message} from "ai"

// Main chat component to be rendered 

interface ChatProps {
    userInput : string;
    messages: Message[];
    handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    handleMessageSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const Chat: React.FC<ChatProps> = ({ userInput,messages, handleInputChange,handleMessageSubmit }) => {

    return (
        <div id="chat" className="flex flex-col w-full lg:w-3/5 mr-4 mx-5 lg:mx-0">
        <MessageBox messages={messages} />
        <>
          <form
            onSubmit={handleMessageSubmit}
            className="mt-5 mb-5 relative bg-gray-700 rounded-lg"
          >
            <input
              type="text"
              className="input-glow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline pl-3 pr-10 bg-gray-600 border-gray-600 transition-shadow duration-200"
              value={userInput}
              onChange={handleInputChange}
            />
  
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              Press ⮐ to send
            </span>
          </form>
        </>
      </div>
    )
}
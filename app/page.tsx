"use client"

import React, { useState } from 'react';
import {Chat} from "./components/Chat/index"
import {Message} from "ai"
import { useChat } from "ai/react";

import {Card} from "./components/Card/Card"

// Main page for the chat app

const Page: React.FC = () => {
  const { messages,input, handleInputChange, handleSubmit } = useChat({api:"http://127.0.0.1:8000/api/message"})

  // const { heading , description , link , keyPoints } = messages.map

  // ReactDom.render(<Markdown>{markdown}</Markdown>, document.body)
    return (
        <div className="flex flex-col justify-between h-screen bg-gray-800 p-2 mx-auto max-w-full">

          <div className='flex w-full flex-grow overflow-hidden relative justify-center'>
            <Chat
        userInput= {input}
        messages= {messages}
        handleInputChange= {handleInputChange}
        handleMessageSubmit= {handleSubmit}
            />
        </div>

        <Card
  heading="Education Journey"
  description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil."
  link="https://..."
  keyPoints={["Point 1", "Point 2", "Point 3"]}
/>
        </div>
        
    )
}

export default Page;



import React, { FormEvent, ChangeEvent } from "react";
import Messages from "./Messages";
import { Message } from "ai/react";

interface Chat {
    input:string;
    messages: Message[];
    handleInputChanges: (e: ChangeEvent<HTMLInputElement>) => void;
    handleMessageSubmit: (e: FormEvent<HTMLFormElement>) => Promise<void>;
}


// Functional Component Chat
const Chat: React.FC<Chat> = ({
    input,
    messages,
    handleInputChanges,
    handleMessageSubmit
}) => {
    return (
        <div id="chat" className="flex flex-col w-full lg:w-3/5 mr-4 mx-5 lg:mx-0">
        <Messages messages={messages} />
        <>
          <form
            onSubmit={handleMessageSubmit}
            className="mt-5 mb-5 relative bg-gray-700 rounded-lg"
          >
            <input
              type="text"
              className="input-glow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline pl-3 pr-10 bg-gray-600 border-gray-600 transition-shadow duration-200"
              value={input}
              onChange={handleInputChanges}
            />
  
            <span className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-gray-400">
              Press ⮐ to send
            </span>
          </form>
        </>
      </div>
    );
}

export default Chat;
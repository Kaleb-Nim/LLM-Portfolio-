
import React from 'react';


interface InputProps {
    userInput: string | null; // Change from string[] | undefined to string | undefined
    setUserInput: (userInput: string | null) => void;
    sendMessage: () => void;
}
// Create input text box for user to type in
export const Input: React.FC<InputProps> = ({ userInput, setUserInput, sendMessage }) => {

    // Update the state when of userInput when the user types in the input box
    return (
        <div className="input flex">
            <input
                type="text"
                placeholder="Type a message..."
                className='input-glow appearance-none border rounded w-full py-2 px-3 text-gray-200 leading-tight focus:outline-none focus:shadow-outline pl-3 pr-10 bg-gray-600 border-gray-600 transition-shadow duration-200'
                value={userInput}
                onChange={(event) => setUserInput(event.target.value)}
            />
            <button className='rounded-md bg-indigo-50 px-3.5 py-2.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100' onClick={sendMessage}>Send</button> {/* Change the onClick handler */}
        </div>
    )
}

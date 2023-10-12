// Component for displaying the message box
import React from 'react';
import { Message } from "ai";


interface MessageBoxProps {
    messages: Message[];
}

export const MessageBox: React.FC<MessageBoxProps> = ({ messages }) => {
    return (
        <div className="message-box">
            {messages.map((message, index) => (
                <div key={index} className="message">
                    <div className="message-content">
                        <div className="message-text">{message.content}</div>
                    </div>
                </div>
            ))}
        </div>
    )
}
import React from 'react';
import { Bot, User } from 'lucide-react';

interface ChatMessageProps {
  message: {
    role: 'user' | 'assistant';
    content: string;
  };
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => {
  const isUser = message.role === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`flex space-x-2 max-w-[80%] ${
          isUser ? 'flex-row-reverse space-x-reverse' : 'flex-row'
        }`}
      >
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center ${
            isUser ? 'bg-[#7A0000]' : 'bg-gray-200'
          }`}
        >
          {isUser ? (
            <User size={16} className="text-white" />
          ) : (
            <Bot size={16} className="text-gray-600" />
          )}
        </div>
        <div
          className={`p-3 rounded-lg ${
            isUser
              ? 'bg-[#7A0000] text-white'
              : 'bg-gray-100 text-gray-800'
          }`}
        >
          {message.content}
        </div>
      </div>
    </div>
  );
};

export default ChatMessage;
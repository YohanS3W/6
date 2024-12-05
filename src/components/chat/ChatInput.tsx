import React, { useState } from 'react';
import { Send } from 'lucide-react';
import useChatStore from '../../store/useChatStore';

const ChatInput: React.FC = () => {
  const [inputValue, setInputValue] = useState('');
  const sendMessage = useChatStore((state) => state.sendMessage);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    await sendMessage(inputValue);
    setInputValue('');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t">
      <div className="flex space-x-2">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7A0000]"
        />
        <button
          type="submit"
          className="bg-[#7A0000] text-white p-2 rounded-lg hover:bg-[#900000] transition-colors"
        >
          <Send size={20} />
        </button>
      </div>
    </form>
  );
};

export default ChatInput;
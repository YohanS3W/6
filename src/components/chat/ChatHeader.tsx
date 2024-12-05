import React from 'react';
import { X, Settings } from 'lucide-react';
import useChatStore from '../../store/useChatStore';

const ChatHeader: React.FC = () => {
  const { toggleChat, toggleSettings } = useChatStore();

  return (
    <div className="bg-[#7A0000] text-white p-4 flex justify-between items-center">
      <h3 className="font-semibold">Yukkthi AI</h3>
      <div className="flex items-center space-x-3">
        <button
          onClick={toggleSettings}
          className="hover:bg-[#900000] p-1 rounded transition-colors"
        >
          <Settings size={18} />
        </button>
        <button
          onClick={toggleChat}
          className="hover:bg-[#900000] p-1 rounded transition-colors"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;
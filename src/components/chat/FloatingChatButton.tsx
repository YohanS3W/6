import React from 'react';
import { MessageSquareText } from 'lucide-react';
import useChatStore from '../../store/useChatStore';

const FloatingChatButton: React.FC = () => {
  const toggleChat = useChatStore((state) => state.toggleChat);

  return (
    <button
      onClick={toggleChat}
      className="fixed bottom-4 right-4 bg-[#7A0000] text-white p-4 rounded-full shadow-lg hover:bg-[#900000] transition-colors z-50"
      aria-label="Open chat"
    >
      <MessageSquareText size={24} />
    </button>
  );
};

export default FloatingChatButton;
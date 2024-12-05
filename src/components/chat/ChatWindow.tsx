import React, { useRef, useEffect } from 'react';
import useChatStore from '../../store/useChatStore';
import ChatHeader from './ChatHeader';
import ChatSettings from './ChatSettings';
import ChatMessage from './ChatMessage';
import ChatInput from './ChatInput';
import ResizeHandle from './ResizeHandle';

interface ChatWindowProps {
  isFullPage?: boolean;
}

const ChatWindow: React.FC<ChatWindowProps> = ({ isFullPage = false }) => {
  const { messages, windowSize, isSettingsOpen, setWindowSize } = useChatStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [isResizing, setIsResizing] = React.useState(false);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Calculate responsive dimensions
  const getResponsiveSize = () => {
    if (isFullPage) {
      return {
        width: '100%',
        height: '100%',
      };
    }

    const isMobile = window.innerWidth < 768;
    if (isMobile) {
      return {
        width: '100%',
        height: '100%',
        maxWidth: '100%',
        maxHeight: '100%',
      };
    }
    return {
      width: `${windowSize.width}px`,
      height: `${windowSize.height}px`,
      maxWidth: '90vw',
      maxHeight: '90vh',
    };
  };

  const handleResize = (width: number, height: number) => {
    setWindowSize({ width, height });
  };

  const baseClasses = isFullPage
    ? 'h-full bg-white flex flex-col overflow-hidden'
    : 'fixed md:bottom-4 md:right-4 bottom-0 right-0 bg-white shadow-xl flex flex-col overflow-hidden md:rounded-lg';

  return (
    <div className={baseClasses} style={getResponsiveSize()}>
      <ChatHeader />
      {isSettingsOpen && <ChatSettings />}
      
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <ChatMessage key={index} message={message} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <ChatInput />
      
      {!isFullPage && (
        <ResizeHandle
          onResize={handleResize}
          onResizing={setIsResizing}
        />
      )}
    </div>
  );
};

export default ChatWindow;
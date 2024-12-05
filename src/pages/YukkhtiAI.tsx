import React from 'react';
import Header from '../components/Header';
import { Bot } from 'lucide-react';
import ChatWindow from '../components/chat/ChatWindow';
import useChatStore from '../store/useChatStore';

const YukkhtiAI = () => {
  const { isOpen, toggleChat } = useChatStore();

  // Ensure chat is open when visiting this page
  React.useEffect(() => {
    if (!isOpen) {
      toggleChat();
    }
    return () => {
      if (isOpen) {
        toggleChat();
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="w-16 h-16 bg-[#7A0000] rounded-full flex items-center justify-center mb-4">
            <Bot className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-white text-center">Yukkthi AI</h1>
          <p className="mt-4 text-lg text-gray-200 text-center max-w-2xl">
            Your intelligent legal assistant powered by advanced AI technology.
            Ask any legal questions or seek guidance on legal matters.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl overflow-hidden h-[600px]">
            <ChatWindow isFullPage />
          </div>
        </div>
      </main>
    </div>
  );
};

export default YukkhtiAI;
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import NewsSlider from './components/NewsSlider';
import QuickLinks from './components/QuickLinks';
import ContactLawyer from './pages/ContactLawyer';
import FAQ from './pages/FAQ';
import Forum from './pages/Forum';
import ThreadDetail from './pages/ThreadDetail';
import Emergency from './pages/Emergency';
import Legislation from './pages/Legislation';
import YukkhtiAI from './pages/YukkhtiAI';
import FloatingChatButton from './components/chat/FloatingChatButton';
import ChatWindow from './components/chat/ChatWindow';
import useChatStore from './store/useChatStore';

function App() {
  const isOpen = useChatStore((state) => state.isOpen);
  const location = useLocation();
  const isYukkhtiAIPage = location.pathname === '/ai';

  const HomePage = () => (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4">
        <div className="space-y-8">
          <section className="mt-8">
            <SearchBar />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Current Affairs</h2>
            <NewsSlider />
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4">Quick Access</h2>
            <QuickLinks />
          </section>
        </div>
      </main>
    </div>
  );

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact-lawyer" element={<ContactLawyer />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/forum" element={<Forum />} />
        <Route path="/forum/thread/:id" element={<ThreadDetail />} />
        <Route path="/emergency" element={<Emergency />} />
        <Route path="/legislation" element={<Legislation />} />
        <Route path="/ai" element={<YukkhtiAI />} />
      </Routes>
      {!isYukkhtiAIPage && (
        <>
          {!isOpen && <FloatingChatButton />}
          {isOpen && <ChatWindow />}
        </>
      )}
    </>
  );
}

export default App;
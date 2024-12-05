import React from 'react';
import Header from '../components/Header';
import { forumThreads } from '../data/forumData';
import ThreadList from '../components/forum/ThreadList';
import { Plus } from 'lucide-react';

const Forum = () => {
  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Legal Forum</h1>
            <button className="bg-[#7A0000] text-white px-4 py-2 rounded-lg hover:bg-[#900000] transition-colors flex items-center">
              <Plus className="w-4 h-4 mr-2" />
              New Thread
            </button>
          </div>
          <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
            <ThreadList threads={forumThreads} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Forum;
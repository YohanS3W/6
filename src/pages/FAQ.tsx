import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import FAQContent from '../components/faq/FAQContent';
import FAQCategorySelect from '../components/faq/FAQCategorySelect';
import FAQFooterLinks from '../components/faq/FAQFooterLinks';

const FAQ = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Yukkthi FAQ</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <SearchBar />
          <FAQCategorySelect 
            selectedCategory={selectedCategory} 
            onCategoryChange={setSelectedCategory} 
          />
          <FAQContent selectedCategory={selectedCategory} />
          <FAQFooterLinks />
        </div>
      </main>
    </div>
  );
};

export default FAQ;
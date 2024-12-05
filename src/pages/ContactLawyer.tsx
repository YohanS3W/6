import React, { useState } from 'react';
import Header from '../components/Header';
import LawyerSearch from '../components/LawyerSearch';
import LawyerList from '../components/LawyerList';
import AddLawyerForm from '../components/AddLawyerForm';
import { Lawyer } from '../types/lawyer';
import { initialLawyers } from '../data/lawyers';

const ContactLawyer = () => {
  const [lawyers, setLawyers] = useState<Lawyer[]>(initialLawyers);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  const handleAddLawyer = (newLawyer: Omit<Lawyer, 'id' | 'isContactVisible' | 'isVerified'>) => {
    setLawyers(prev => [...prev, {
      ...newLawyer,
      id: prev.length + 1,
      isContactVisible: false,
      isVerified: false
    }]);
  };

  const handleRequestAccess = async (lawyerId: number, userEmail: string) => {
    // Simulate email verification and lawyer acceptance
    setLawyers(prev => prev.map(lawyer => {
      if (lawyer.id === lawyerId) {
        return { ...lawyer, isVerified: true, isContactVisible: true };
      }
      return lawyer;
    }));
  };

  const filteredLawyers = lawyers.filter(lawyer => 
    lawyer.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Contact Lawyer</h1>
        
        <div className="max-w-7xl mx-auto space-y-8">
          <LawyerSearch onSearch={handleSearch} />
          
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
            <LawyerList 
              lawyers={filteredLawyers}
              onRequestAccess={handleRequestAccess}
            />
          </div>

          <div className="bg-white bg-opacity-90 rounded-lg p-6 shadow-lg">
            <AddLawyerForm onAddLawyer={handleAddLawyer} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ContactLawyer;
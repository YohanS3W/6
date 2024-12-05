import React, { useState } from 'react';
import Header from '../components/Header';
import EmergencySearch from '../components/emergency/EmergencySearch';
import { emergencyContacts } from '../data/emergencyContacts';

const Emergency = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredContacts = emergencyContacts.filter(contact =>
    contact.entity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    contact.contactNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-cover bg-center bg-fixed"
         style={{
           backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=1920&q=80)`,
         }}>
      <Header />
      <main className="pt-20 container mx-auto px-4 pb-8">
        <h1 className="text-3xl font-bold text-white mb-8 text-center">Emergency Contacts</h1>
        
        <div className="max-w-4xl mx-auto space-y-8">
          <EmergencySearch onSearch={setSearchTerm} />
          
          <div className="bg-white bg-opacity-90 rounded-lg shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Entity
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Contact Number
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredContacts.map((contact, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-normal">
                        <div className="text-sm font-medium text-gray-900">
                          {contact.entity}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-normal">
                        <div className="text-sm text-gray-900">
                          {contact.contactNumber}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Emergency;
import React, { useState } from 'react';
import { Lawyer } from '../types/lawyer';
import { Mail, Phone, Lock, Check } from 'lucide-react';

interface LawyerListProps {
  lawyers: Lawyer[];
  onRequestAccess: (lawyerId: number, userEmail: string) => void;
}

const LawyerList = ({ lawyers, onRequestAccess }: LawyerListProps) => {
  const [userEmail, setUserEmail] = useState<string>('');
  const [showEmailPrompt, setShowEmailPrompt] = useState<number | null>(null);

  const handleRequestClick = (lawyerId: number) => {
    setShowEmailPrompt(lawyerId);
  };

  const handleEmailSubmit = (lawyerId: number) => {
    if (userEmail) {
      onRequestAccess(lawyerId, userEmail);
      setShowEmailPrompt(null);
      setUserEmail('');
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Profile
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {lawyers.map((lawyer) => (
            <tr key={lawyer.id} className="hover:bg-gray-50">
              <td className="px-6 py-4 whitespace-nowrap">
                <img
                  src={lawyer.image}
                  alt={lawyer.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm font-medium text-gray-900">{lawyer.name}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {lawyer.isContactVisible ? (
                    <div className="flex items-center">
                      <Mail className="w-4 h-4 mr-2 text-gray-400" />
                      {lawyer.email}
                    </div>
                  ) : (
                    <span className="text-gray-400">•••••••••••</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">
                  {lawyer.isContactVisible ? (
                    <div className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-gray-400" />
                      {lawyer.phone}
                    </div>
                  ) : (
                    <span className="text-gray-400">•••••••••••</span>
                  )}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {lawyer.isContactVisible ? (
                  <span className="flex items-center text-green-600">
                    <Check className="w-4 h-4 mr-2" />
                    Access Granted
                  </span>
                ) : showEmailPrompt === lawyer.id ? (
                  <div className="flex items-center space-x-2">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={userEmail}
                      onChange={(e) => setUserEmail(e.target.value)}
                      className="w-48 px-2 py-1 text-sm border rounded"
                    />
                    <button
                      onClick={() => handleEmailSubmit(lawyer.id)}
                      className="bg-[#7A0000] text-white px-3 py-1 rounded text-sm hover:bg-[#900000] transition-colors"
                    >
                      Verify
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleRequestClick(lawyer.id)}
                    className="flex items-center text-[#7A0000] hover:text-[#900000] transition-colors text-sm"
                  >
                    <Lock className="w-4 h-4 mr-2" />
                    Request Access
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LawyerList;
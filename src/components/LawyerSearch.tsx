import React from 'react';
import { Search } from 'lucide-react';

interface LawyerSearchProps {
  onSearch: (term: string) => void;
}

const LawyerSearch = ({ onSearch }: LawyerSearchProps) => {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Search lawyers by name..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-3 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:border-[#7A0000] focus:ring-1 focus:ring-[#7A0000]"
      />
      <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
    </div>
  );
};

export default LawyerSearch;
import React from 'react';
import { Search } from 'lucide-react';

interface LegislationSearchProps {
  onSearch: (term: string) => void;
}

const LegislationSearch: React.FC<LegislationSearchProps> = ({ onSearch }) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        placeholder="Search documents..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-3 py-2 pl-9 text-sm rounded-lg border border-gray-300 focus:outline-none focus:border-[#7A0000] focus:ring-1 focus:ring-[#7A0000]"
      />
      <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
    </div>
  );
};

export default LegislationSearch;
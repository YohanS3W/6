import React from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQCategorySelectProps {
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  'All',
  'Fundamental Rights',
  'Employment Law',
  'Company Law',
  'Road Traffic Law',
  'Divorce Law',
  'Criminal Law'
];

const FAQCategorySelect = ({ selectedCategory, onCategoryChange }: FAQCategorySelectProps) => {
  return (
    <div className="relative">
      <select
        value={selectedCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        className="w-full px-4 py-3 bg-white rounded-lg appearance-none cursor-pointer border border-gray-300 focus:outline-none focus:border-[#7A0000] focus:ring-1 focus:ring-[#7A0000] hover:bg-gray-50"
      >
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>
      <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
    </div>
  );
};

export default FAQCategorySelect;
import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../../data/faqData';

interface FAQContentProps {
  selectedCategory: string;
}

const FAQContent = ({ selectedCategory }: FAQContentProps) => {
  const [openQuestions, setOpenQuestions] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    setOpenQuestions(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const filteredQuestions = selectedCategory === 'All'
    ? faqData
    : faqData.filter(q => q.category === selectedCategory);

  return (
    <div className="space-y-4">
      {filteredQuestions.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-100 border border-gray-300 rounded-lg hover:bg-gray-200 transition-colors"
        >
          <button
            onClick={() => toggleQuestion(index)}
            className="w-full p-4 text-left flex justify-between items-center"
          >
            <span className="font-bold pr-8">{faq.question}</span>
            {openQuestions.includes(index) ? (
              <ChevronUp className="flex-shrink-0" />
            ) : (
              <ChevronDown className="flex-shrink-0" />
            )}
          </button>
          {openQuestions.includes(index) && (
            <div className="px-4 pb-4 whitespace-pre-line">
              {faq.answer}
              {faq.image && (
                <img
                  src={faq.image}
                  alt={`Illustration for ${faq.question}`}
                  className="mt-4 rounded-lg max-w-full h-auto"
                />
              )}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default FAQContent;
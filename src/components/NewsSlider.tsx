import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const NewsSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const articles = [
    {
      id: 1,
      title: "Latest Supreme Court Ruling",
      image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "New Legal Framework",
      image: "https://images.unsplash.com/photo-1453945619913-79ec89a82c51?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Legal Education Reform",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Legal Education Reform",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 5,
      title: "Legal Education Reform",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 6,
      title: "Legal Education Reform",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 7,
      title: "Legal Education Reform",
      image: "https://images.unsplash.com/photo-1505664194779-8beaceb93744?auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <div className="relative overflow-hidden">
      <div 
        ref={scrollRef}
        className="flex space-x-4 overflow-x-auto scrollbar-hide p-4 snap-x snap-mandatory"
      >
        {articles.map((article) => (
          <div
            key={article.id}
            className="flex-none w-72 h-48 relative rounded-lg overflow-hidden snap-start"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
              <h3 className="text-white font-semibold">{article.title}</h3>
            </div>
          </div>
        ))}
      </div>
      <button 
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-r"
      >
        <ChevronLeft className="text-white" />
      </button>
      <button 
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-l"
      >
        <ChevronRight className="text-white" />
      </button>
    </div>
  );
};

export default NewsSlider;
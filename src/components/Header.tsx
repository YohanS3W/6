import React, { useState } from 'react';
import { Menu, X, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const navLinks = [
    { name: 'Homepage', path: '/' },
    { name: 'Yukkthi FAQ', path: '/faq' },
    { name: 'Yukkthi AI', path: '/ai' },
    { name: 'Forum', path: '/forum' },
    { name: 'About Us', path: '/about' },
  ];

  return (
    <header className="bg-[#7A0000] fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <span className="text-white text-xl font-bold">YUKKTHIYA</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-white hover:text-gray-300 transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center">
            <User className="h-6 w-6 text-white cursor-pointer" />
            <button
              className="md:hidden ml-4 text-white"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 md:hidden">
          <div className="fixed right-0 top-0 h-full w-64 bg-[#7A0000] p-4">
            <div className="flex justify-end">
              <button
                className="text-white"
                onClick={() => setIsSidebarOpen(false)}
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-white hover:text-gray-300 transition-colors"
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
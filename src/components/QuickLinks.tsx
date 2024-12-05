import React from 'react';
import { Brain, HelpCircle, MessageSquare, GamepadIcon, Scale, BookOpen, Gavel, Phone, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const QuickLinks = () => {
  const links = [
    { icon: Brain, title: 'Yukkthi AI', path: '/ai' },
    { icon: HelpCircle, title: 'Yukkthi FAQ', path: '/faq' },
    { icon: MessageSquare, title: 'Forum', path: '/forum' },
    { icon: GamepadIcon, title: 'Learn Law', path: '/learn' },
    { icon: Scale, title: 'Jurisdiction Assessor', path: '/jurisdiction' },
    { icon: BookOpen, title: 'Legislation', path: '/legislation' },
    { icon: Gavel, title: 'Case Reports', path: '/cases' },
    { icon: Phone, title: 'Emergency Contacts', path: '/emergency' },
    { icon: UserPlus, title: 'Contact Lawyer', path: '/contact-lawyer' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
      {links.map((link) => {
        const Icon = link.icon;
        return (
          <Link
            key={link.title}
            to={link.path}
            className="flex flex-col items-center p-4 bg-white bg-opacity-90 rounded-lg shadow-md hover:shadow-lg transition-shadow hover:bg-opacity-100"
          >
            <Icon className="h-8 w-8 text-[#7A0000] mb-2" />
            <span className="text-center text-sm font-medium text-gray-800">
              {link.title}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
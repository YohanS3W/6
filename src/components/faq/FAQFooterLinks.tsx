import React from 'react';
import { Link } from 'react-router-dom';

const FAQFooterLinks = () => {
  return (
    <div className="text-center text-white mt-12">
      <p className="mb-4">Looking for more answers? Try out now:</p>
      <div className="space-x-4">
        <Link
          to="/ai"
          className="text-white hover:underline transition-all"
        >
          Yukkthi AI
        </Link>
        <Link
          to="/forum"
          className="text-white hover:underline transition-all"
        >
          Forum
        </Link>
      </div>
    </div>
  );
};

export default FAQFooterLinks;
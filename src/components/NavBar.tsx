
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const NavBar: React.FC = () => {
  const links = [
    { name: 'Home', path: '/' },
    { name: 'Our Story', path: '/story' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Love Letter', path: '/letter' },
    { name: 'Favorites', path: '/favorites' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-pastel-pink/70 backdrop-blur-sm z-50 py-3 pixel-borders">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-6 md:gap-10 overflow-x-auto px-4">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="whitespace-nowrap text-sm md:text-base font-pixel text-pastel-cream hover:text-white transition-colors px-2 py-1 flex items-center"
            >
              <Heart className="w-3 h-3 mr-2 inline animate-pulse-soft" />
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

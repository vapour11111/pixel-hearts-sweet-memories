
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<number | null>(null);
  
  const links = [
    { name: 'Home', path: '/', icon: <Heart className="w-3 h-3" /> },
    { name: 'Our Story', path: '/story', icon: <Star className="w-3 h-3" /> },
    { name: 'Gallery', path: '/gallery', icon: <Heart className="w-3 h-3" /> },
    { name: 'Love Letter', path: '/letter', icon: <Star className="w-3 h-3" /> },
    { name: 'Favorites', path: '/favorites', icon: <Heart className="w-3 h-3" /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-pastel-blue/90 via-pastel-cream/90 to-pastel-yellow/90 backdrop-blur-sm z-50 py-3 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-6 md:gap-10 overflow-x-auto px-4">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={index}
                to={link.path}
                className={`
                  whitespace-nowrap text-sm md:text-base font-pixel
                  ${isActive 
                    ? 'text-dark-blue' 
                    : 'text-accent-blue hover:text-dark-blue'
                  }
                  transition-all duration-300 px-2 py-1 flex items-center relative
                `}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <div 
                  className={`
                    absolute inset-0 bg-white/20 rounded-md -z-10 transform scale-y-0 origin-bottom transition-transform duration-300
                    ${isActive || isHovered === index ? 'scale-y-100' : ''}
                  `}
                />
                <div 
                  className={`
                    ${isActive ? 'animate-pulse-rainbow' : 'animate-pulse-soft'}
                    mr-2 inline-block
                  `}
                >
                  {link.icon}
                </div>
                {link.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent-blue animate-pulse-rainbow"></span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

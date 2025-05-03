
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Star, Gamepad } from 'lucide-react';

const NavBar: React.FC = () => {
  const location = useLocation();
  const [isHovered, setIsHovered] = useState<number | null>(null);
  
  const links = [
    { name: 'Home', path: '/', icon: <Heart className="w-4 h-4" /> },
    { name: 'Our Story', path: '/story', icon: <Star className="w-4 h-4" /> },
    { name: 'Gallery', path: '/gallery', icon: <Heart className="w-4 h-4" /> },
    { name: 'Love Letter', path: '/letter', icon: <Star className="w-4 h-4" /> },
    { name: 'Favorites', path: '/favorites', icon: <Heart className="w-4 h-4" /> },
    { name: 'Games', path: '/games', icon: <Gamepad className="w-4 h-4" /> }
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-accent-blue/80 via-white/80 to-accent-pink/80 backdrop-blur-sm z-50 py-4 shadow-lg">
      <div className="container mx-auto">
        <div className="flex justify-center items-center gap-3 md:gap-6 overflow-x-auto px-2 md:px-4">
          {links.map((link, index) => {
            const isActive = location.pathname === link.path;
            
            return (
              <Link
                key={index}
                to={link.path}
                className={`
                  relative px-3 py-2 rounded-full transition-all duration-300
                  ${isActive 
                    ? 'bg-white/30 text-dark-blue shadow-inner' 
                    : 'hover:bg-white/20 text-accent-blue hover:text-dark-blue'
                  }
                  font-pixel text-sm md:text-base whitespace-nowrap flex items-center
                `}
                onMouseEnter={() => setIsHovered(index)}
                onMouseLeave={() => setIsHovered(null)}
              >
                <span 
                  className={`
                    ${isActive ? 'animate-pulse-rainbow' : 'animate-pulse-soft'}
                    mr-2 inline-block
                  `}
                >
                  {link.icon}
                </span>
                {link.name}
                {(isActive || isHovered === index) && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-pink animate-pulse-rainbow"></span>
                )}
                {(isActive || isHovered === index) && (
                  <span className="absolute -inset-0.5 rounded-full bg-white/10 -z-10 animate-pulse-soft"></span>
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

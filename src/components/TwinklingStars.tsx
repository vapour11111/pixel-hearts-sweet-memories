
import React, { useEffect, useState } from 'react';

interface Star {
  id: number;
  left: string;
  top: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
  size: string;
  rotation: number;
  type: 'star' | 'sparkle' | 'dot';
  color: string;
}

const TwinklingStars: React.FC = () => {
  const [stars, setStars] = useState<Star[]>([]);
  
  useEffect(() => {
    // Generate initial stars
    const initialStars = Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDuration: `${1 + Math.random() * 3}s`,
      animationDelay: `${Math.random() * 3}s`,
      opacity: 0.2 + Math.random() * 0.6,
      size: `${3 + Math.random() * 8}px`,
      rotation: Math.random() * 360,
      type: Math.random() > 0.6 
        ? 'star' 
        : Math.random() > 0.5 
          ? 'sparkle' 
          : 'dot',
      color: Math.random() > 0.7
        ? 'text-accent-blue'
        : Math.random() > 0.4
          ? 'text-accent-pink'
          : 'text-white',
    }));
    
    setStars(initialStars);
    
    // Add occasional "shooting star" effect
    const interval = setInterval(() => {
      const shouldAddShootingStar = Math.random() > 0.7;
      
      if (shouldAddShootingStar) {
        const shootingStar = {
          id: Date.now(),
          left: `${Math.random() * 90}%`,
          top: `${Math.random() * 50}%`,
          animationDuration: '1s',
          animationDelay: '0s',
          opacity: 0.9,
          size: `${6 + Math.random() * 4}px`,
          rotation: Math.random() * 45 - 45, // Angled downward
          type: 'sparkle',
          color: 'text-white',
        };
        
        setStars(prev => [...prev.slice(-59), shootingStar]);
      }
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {stars.map((star) => (
        <div 
          key={star.id}
          className={`absolute ${
            star.type === 'sparkle' 
              ? 'animate-sparkle' 
              : star.type === 'star' 
                ? 'animate-twinkle' 
                : 'animate-pulse-soft'
          } ${star.color}`}
          style={{
            left: star.left,
            top: star.top,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
            opacity: star.opacity,
            fontSize: star.size,
            transform: `rotate(${star.rotation}deg)`,
          }}
        >
          {star.type === 'star' ? '★' : star.type === 'sparkle' ? '✦' : '•'}
          <div className="absolute inset-0 animate-pulse-rainbow opacity-30"></div>
        </div>
      ))}
    </div>
  );
};

export default TwinklingStars;


import React from 'react';

const TwinklingStars: React.FC = () => {
  const starStyles = Array.from({ length: 40 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${1 + Math.random() * 3}s`,
    animationDelay: `${Math.random() * 3}s`,
    opacity: 0.2 + Math.random() * 0.5,
    size: `${4 + Math.random() * 8}px`,
    rotation: Math.random() * 360,
    type: Math.random() > 0.3 ? 'star' : 'sparkle',
    color: Math.random() > 0.5 
      ? 'text-accent-yellow' 
      : 'text-accent-blue',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {starStyles.map((style, index) => (
        <div 
          key={index}
          className={`absolute ${style.type === 'sparkle' ? 'animate-sparkle' : 'animate-twinkle'} ${style.color}`}
          style={{
            left: style.left,
            top: style.top,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            opacity: style.opacity,
            fontSize: style.size,
            transform: `rotate(${style.rotation}deg)`,
          }}
        >
          {style.type === 'star' ? '★' : '✦'}
        </div>
      ))}
    </div>
  );
};

export default TwinklingStars;

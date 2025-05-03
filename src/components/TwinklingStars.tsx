
import React from 'react';

const TwinklingStars: React.FC = () => {
  const starStyles = Array.from({ length: 30 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    top: `${Math.random() * 100}%`,
    animationDuration: `${1 + Math.random() * 3}s`,
    animationDelay: `${Math.random() * 3}s`,
    opacity: 0.2 + Math.random() * 0.5,
    fontSize: `${4 + Math.random() * 8}px`,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {starStyles.map((style, index) => (
        <div 
          key={index}
          className="absolute text-accent-pink animate-twinkle"
          style={{
            left: style.left,
            top: style.top,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            opacity: style.opacity,
            fontSize: style.fontSize,
          }}
        >
          ★
        </div>
      ))}
    </div>
  );
};

export default TwinklingStars;

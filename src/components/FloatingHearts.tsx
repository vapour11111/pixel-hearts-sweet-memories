
import React from 'react';

const FloatingHearts: React.FC = () => {
  // Generate randomized hearts for the animation
  const heartStyles = Array.from({ length: 20 }, (_, i) => ({
    left: `${Math.random() * 100}%`,
    animationDuration: `${3 + Math.random() * 5}s`,
    animationDelay: `${Math.random() * 5}s`,
    opacity: 0.2 + Math.random() * 0.4,
    fontSize: `${14 + Math.random() * 16}px`,
    type: Math.random() > 0.5 ? 'heart' : 'star',
    color: Math.random() > 0.5 
      ? 'text-accent-blue' 
      : 'text-accent-pink',
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {heartStyles.map((style, index) => (
        <div 
          key={index}
          className={`absolute animate-float ${style.color}`}
          style={{
            left: style.left,
            animationDuration: style.animationDuration,
            animationDelay: style.animationDelay,
            opacity: style.opacity,
            fontSize: style.fontSize,
          }}
        >
          {style.type === 'heart' ? '♥' : '★'}
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

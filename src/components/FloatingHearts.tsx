import React, { useEffect, useState } from 'react';

interface FloatingItem {
  id: number;
  left: string;
  animationDuration: string;
  animationDelay: string;
  opacity: number;
  fontSize: string;
  type: 'heart' | 'star' | 'sparkle';
  color: string;
  rotate: number;
}

const FloatingHearts: React.FC = () => {
  const [items, setItems] = useState<FloatingItem[]>([]);
  
  useEffect(() => {
    // Generate randomized floating items
    const generatedItems = Array.from({ length: 25 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      animationDuration: `${5 + Math.random() * 7}s`,
      animationDelay: `${Math.random() * 5}s`,
      opacity: 0.3 + Math.random() * 0.5,
      fontSize: `${16 + Math.random() * 20}px`,
      type: Math.random() > 0.7 
        ? 'heart' 
        : Math.random() > 0.5 
          ? 'star' 
          : 'sparkle',
      color: Math.random() > 0.6 
        ? 'text-accent-blue' 
        : 'text-accent-pink',
      rotate: Math.random() * 360,
    }));
    
    setItems(generatedItems);
    
    // Add new items periodically
    const interval = setInterval(() => {
      setItems(prevItems => {
        const newItem = {
          id: Date.now(),
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 7}s`,
          animationDelay: '0s',
          opacity: 0.3 + Math.random() * 0.5,
          fontSize: `${16 + Math.random() * 20}px`,
          type: Math.random() > 0.7 
            ? 'heart' 
            : Math.random() > 0.5 
              ? 'star' 
              : 'sparkle',
          color: Math.random() > 0.6 
            ? 'text-accent-blue' 
            : 'text-accent-pink',
          rotate: Math.random() * 360,
        };
        
        // Keep only the most recent items to avoid performance issues
        const updatedItems = [...prevItems, newItem].slice(-40);
        return updatedItems;
      });
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-10 overflow-hidden">
      {items.map((item) => (
        <div 
          key={item.id}
          className={`absolute animate-float ${item.color} ${item.type === 'sparkle' ? 'sparkle' : ''}`}
          style={{
            left: item.left,
            bottom: '-20px',
            animationDuration: item.animationDuration,
            animationDelay: item.animationDelay,
            opacity: item.opacity,
            fontSize: item.fontSize,
            transform: `rotate(${item.rotate}deg)`,
          }}
        >
          {item.type === 'heart' ? '♥' : item.type === 'star' ? '★' : '✦'}
          <div className={`absolute inset-0 animate-pulse-rainbow opacity-50 ${item.type === 'sparkle' ? 'block' : 'hidden'}`}></div>
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;

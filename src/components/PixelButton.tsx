
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'candy' | 'blue' | 'pink';
}

const PixelButton: React.FC<PixelButtonProps> = ({ 
  className, 
  children, 
  variant = 'default',
  ...props 
}) => {
  const getButtonClass = () => {
    switch(variant) {
      case 'candy': return 'btn-candy bg-accent-pink hover:bg-accent-pink/90';
      case 'blue': return 'pixel-btn bg-accent-blue hover:bg-accent-blue/90';
      case 'pink': return 'pixel-btn bg-accent-pink hover:bg-accent-pink/90';
      default: return 'pixel-btn';
    }
  };

  return (
    <button
      className={cn(
        getButtonClass(),
        'hover:animate-bounce-small transition-all relative group',
        className
      )}
      {...props}
    >
      <span className="absolute inset-0 bg-white/20 opacity-0 rounded-md group-hover:opacity-100 transition-opacity"></span>
      {children}
      <span className="absolute -inset-1 -z-10 animate-pulse-rainbow opacity-0 group-hover:opacity-100 transition-opacity"></span>
    </button>
  );
};

export default PixelButton;

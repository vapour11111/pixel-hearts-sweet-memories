
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'candy';
}

const PixelButton: React.FC<PixelButtonProps> = ({ 
  className, 
  children, 
  variant = 'default',
  ...props 
}) => {
  return (
    <button
      className={cn(
        variant === 'default' ? 'pixel-btn' : 'btn-candy',
        'hover:animate-bounce-small transition-all',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default PixelButton;

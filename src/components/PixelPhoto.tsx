
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelPhotoProps {
  imageSrc: string;
  altText: string;
  caption?: string;
  rotation?: number;
  className?: string;
  variant?: 'blue' | 'yellow' | 'pink';
}

const PixelPhoto: React.FC<PixelPhotoProps> = ({
  imageSrc,
  altText,
  caption,
  rotation = 0,
  className,
  variant = 'blue',
}) => {
  const borderColorClass = {
    'blue': 'border-accent-blue',
    'yellow': 'border-accent-yellow',
    'pink': 'border-accent-pink',
  }[variant];

  const shadowColorClass = {
    'blue': 'shadow-accent-blue/30',
    'yellow': 'shadow-accent-yellow/30',
    'pink': 'shadow-accent-pink/30',
  }[variant];

  return (
    <div 
      className={cn(
        'polaroid retro-shadow mx-auto max-w-xs transition-all duration-300 hover:scale-105 hover:shadow-lg',
        shadowColorClass,
        className
      )}
      style={{ '--rotate-deg': `${rotation}deg` } as React.CSSProperties}
    >
      <div className={cn("pixel-border overflow-hidden", borderColorClass)}>
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      {caption && (
        <p className="text-center mt-3 font-cute text-lg">{caption}</p>
      )}
    </div>
  );
};

export default PixelPhoto;

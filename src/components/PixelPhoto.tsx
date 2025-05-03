
import React from 'react';
import { cn } from '@/lib/utils';

interface PixelPhotoProps {
  imageSrc: string;
  altText: string;
  caption?: string;
  rotation?: number;
  className?: string;
}

const PixelPhoto: React.FC<PixelPhotoProps> = ({
  imageSrc,
  altText,
  caption,
  rotation = 0,
  className,
}) => {
  return (
    <div 
      className={cn(
        'polaroid retro-shadow mx-auto max-w-xs transition-transform hover:scale-105',
        className
      )}
      style={{ '--rotate-deg': `${rotation}deg` } as React.CSSProperties}
    >
      <div className="pixel-border overflow-hidden">
        <img
          src={imageSrc}
          alt={altText}
          className="w-full h-auto object-cover"
        />
      </div>
      {caption && (
        <p className="text-center mt-3 font-cute text-lg">{caption}</p>
      )}
    </div>
  );
};

export default PixelPhoto;

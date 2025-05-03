
import React, { useState } from 'react';
import PixelPhoto from '../components/PixelPhoto';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import TwinklingStars from '../components/TwinklingStars';

const Gallery: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Our first selfie",
      caption: "First date selfie 💕",
      rotation: -3,
      category: 'dates',
      variant: 'blue'
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Flowers you gave me",
      caption: "The flowers you surprised me with",
      rotation: 2,
      category: 'gifts',
      variant: 'blue'
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      alt: "Stargazing night",
      caption: "Our stargazing night",
      rotation: -2,
      category: 'adventures',
      variant: 'pink'
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Movie night at home",
      caption: "Movie night with blanket forts",
      rotation: 3,
      category: 'dates',
      variant: 'blue'
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Beach day",
      caption: "That perfect beach day",
      rotation: -1,
      category: 'adventures',
      variant: 'blue'
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Hiking adventure",
      caption: "Our hiking adventure",
      rotation: 2,
      category: 'adventures',
      variant: 'pink'
    },
  ];

  const categories = ['all', 'dates', 'adventures', 'gifts'];
  
  const filteredPhotos = activeFilter === 'all' 
    ? photos 
    : photos.filter(photo => photo.category === activeFilter);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-blue to-pastel-cream bubble-bg pt-20 pb-10 px-4">
      <TwinklingStars />
      
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-blue mb-8 text-center pt-8 animate-pulse-rainbow">
          Our Photo Gallery
        </h1>
        
        <div className="flex justify-center mb-8 gap-2 flex-wrap">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveFilter(category)}
              className={`
                px-4 py-2 rounded-full text-sm font-pixel transition-all duration-300
                ${activeFilter === category 
                  ? 'bg-accent-blue text-white shadow-lg' 
                  : 'bg-white/50 text-accent-blue hover:bg-white/80'
                }
              `}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {filteredPhotos.map((photo, index) => (
            <div 
              key={index} 
              className="flex justify-center transform transition-all duration-700"
              style={{ 
                opacity: 0,
                animation: 'fadeIn 0.5s forwards',
                animationDelay: `${index * 0.1}s`
              }}
            >
              <PixelPhoto
                imageSrc={photo.src}
                altText={photo.alt}
                caption={photo.caption}
                rotation={photo.rotation}
                variant={photo.variant as 'blue' | 'yellow' | 'pink'}
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link to="/letter">
            <PixelButton variant="blue">
              Read My Love Letter
              <span className="ml-2 inline-block animate-bounce-small">💌</span>
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default Gallery;

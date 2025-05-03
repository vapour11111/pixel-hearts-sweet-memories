
import React from 'react';
import PixelPhoto from '../components/PixelPhoto';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import TwinklingStars from '../components/TwinklingStars';

const Gallery: React.FC = () => {
  const photos = [
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Our first selfie",
      caption: "First date selfie 💕",
      rotation: -3,
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Flowers you gave me",
      caption: "The flowers you surprised me with",
      rotation: 2,
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb",
      alt: "Stargazing night",
      caption: "Our stargazing night",
      rotation: -2,
    },
    {
      src: "https://images.unsplash.com/photo-1721322800607-8c38375eef04",
      alt: "Movie night at home",
      caption: "Movie night with blanket forts",
      rotation: 3,
    },
    {
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901",
      alt: "Beach day",
      caption: "That perfect beach day",
      rotation: -1,
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07",
      alt: "Hiking adventure",
      caption: "Our hiking adventure",
      rotation: 2,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-cream to-pastel-blue heart-bg pt-20 pb-10 px-4">
      <TwinklingStars />
      
      <div className="container mx-auto max-w-6xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-pink mb-8 text-center pt-8">Our Photo Gallery</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {photos.map((photo, index) => (
            <div key={index} className="flex justify-center">
              <PixelPhoto
                imageSrc={photo.src}
                altText={photo.alt}
                caption={photo.caption}
                rotation={photo.rotation}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link to="/letter">
            <PixelButton>Read My Love Letter</PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

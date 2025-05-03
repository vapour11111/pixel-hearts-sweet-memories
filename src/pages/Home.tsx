
import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TwinklingStars from '../components/TwinklingStars';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-pink to-pastel-lavender heart-bg flex flex-col items-center justify-center py-20 px-4">
      <FloatingHearts />
      <TwinklingStars />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-float">
          <Heart className="h-20 w-20 mx-auto text-accent-pink" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-pixel text-dark-pink mb-6 tracking-wider">
          Happy Anniversary!
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mb-8">
          <span className="text-2xl md:text-3xl font-handwritten">Your Name</span>
          <span className="text-2xl">💕</span>
          <span className="text-2xl md:text-3xl font-handwritten">Your Partner's Name</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg retro-shadow pixel-border mb-10">
          <p className="text-lg md:text-xl font-cute mb-4">
            365 days of adventures, laughter, and love.
            Here's to our first year together — and to many more ahead!
          </p>
          <p className="text-lg md:text-xl font-cute">
            This digital love letter is my gift to you. 
            Explore our memories and all the things that make us, <span className="text-accent-pink font-bold">us</span>.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/story">
            <PixelButton>Our Story</PixelButton>
          </Link>
          <Link to="/gallery">
            <PixelButton variant="candy">Photo Gallery</PixelButton>
          </Link>
          <Link to="/letter">
            <PixelButton>Love Letter</PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-center font-pixel text-xs md:text-sm text-dark-pink">
        <p>Created with 💖 for our special day</p>
        <p className="mt-2">May 3, 2025</p>
      </div>
    </div>
  );
};

export default Home;

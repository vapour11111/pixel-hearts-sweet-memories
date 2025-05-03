
import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TwinklingStars from '../components/TwinklingStars';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-blue to-pastel-yellow heart-bg flex flex-col items-center justify-center py-20 px-4">
      <FloatingHearts />
      <TwinklingStars />
      
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="mb-8 animate-float-fast">
          <div className="relative inline-block">
            <Heart className="h-20 w-20 mx-auto text-accent-blue animate-pulse-rainbow" />
            <Star className="h-10 w-10 absolute -top-2 -right-2 text-accent-yellow animate-sparkle" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-pixel text-dark-blue mb-6 tracking-wider relative">
          <span className="animate-pulse-rainbow">Happy Anniversary!</span>
          <div className="absolute -right-4 top-0 text-accent-yellow animate-twinkle">★</div>
          <div className="absolute -left-4 bottom-0 text-accent-pink animate-twinkle" style={{ animationDelay: '1s' }}>★</div>
        </h1>
        
        <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-4 mb-8">
          <span className="text-2xl md:text-3xl font-handwritten text-dark-blue">Your Name</span>
          <span className="text-2xl animate-bounce-small">💙</span>
          <span className="text-2xl md:text-3xl font-handwritten text-dark-blue">Your Partner's Name</span>
        </div>
        
        <div className="bg-white/80 backdrop-blur-sm p-6 rounded-lg retro-shadow pixel-border border-accent-blue mb-10 transform hover:scale-102 transition-all">
          <p className="text-lg md:text-xl font-cute mb-4">
            <span className="text-accent-blue font-bold">365 days</span> of adventures, laughter, and love.
            Here's to our first year together — and to many more ahead!
          </p>
          <p className="text-lg md:text-xl font-cute">
            This digital love letter is my gift to you. 
            Explore our memories and all the things that make us, <span className="text-accent-blue font-bold">us</span>.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/story">
            <PixelButton variant="blue" className="group">
              Our Story
              <span className="ml-2 group-hover:animate-bounce-small inline-block">📖</span>
            </PixelButton>
          </Link>
          <Link to="/gallery">
            <PixelButton variant="yellow" className="group">
              Photo Gallery
              <span className="ml-2 group-hover:animate-bounce-small inline-block">📷</span>
            </PixelButton>
          </Link>
          <Link to="/letter">
            <PixelButton variant="candy" className="group">
              Love Letter
              <span className="ml-2 group-hover:animate-bounce-small inline-block">💌</span>
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-center font-pixel text-xs md:text-sm text-dark-blue">
        <p>Created with 💖 for our special day</p>
        <p className="mt-2">May 3, 2025</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pastel-yellow/50 to-transparent"></div>
    </div>
  );
};

export default Home;

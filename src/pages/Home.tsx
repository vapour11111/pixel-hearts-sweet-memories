
import React, { useEffect, useRef } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TwinklingStars from '../components/TwinklingStars';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const Home: React.FC = () => {
  const addSparklesRef = useRef<HTMLDivElement>(null);
  
  // Function to create and add sparkle elements
  const createSparkle = (x: number, y: number) => {
    if (!addSparklesRef.current) return;
    
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    
    // Random sparkle properties
    const size = Math.random() * 10 + 5;
    const duration = Math.random() * 1 + 0.5;
    const color = Math.random() > 0.5 ? '#5C9DFF' : '#FF9EB5';
    
    sparkle.style.width = `${size}px`;
    sparkle.style.height = `${size}px`;
    sparkle.style.left = `${x - addSparklesRef.current.getBoundingClientRect().left}px`;
    sparkle.style.top = `${y - addSparklesRef.current.getBoundingClientRect().top}px`;
    sparkle.style.backgroundColor = color;
    sparkle.style.boxShadow = `0 0 ${size/2}px ${color}`;
    sparkle.style.animationDuration = `${duration}s`;
    
    addSparklesRef.current.appendChild(sparkle);
    
    // Remove sparkle after animation
    setTimeout(() => {
      if (sparkle.parentNode) {
        sparkle.parentNode.removeChild(sparkle);
      }
    }, duration * 1000);
  };
  
  // Add sparkle effect on mousemove
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (Math.random() > 0.9) { // Only create sparkles occasionally
        createSparkle(e.clientX, e.clientY);
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-blue/50 to-pastel-lavender/80 heart-bg flex flex-col items-center justify-center py-20 px-4 bubble-bg cloud-bg">
      <FloatingHearts />
      <TwinklingStars />
      
      <div ref={addSparklesRef} className="max-w-3xl mx-auto text-center relative z-10 sparkle-container">
        <div className="mb-8 animate-float">
          <div className="relative inline-block">
            <Heart className="h-20 w-20 mx-auto text-accent-blue animate-pulse-rainbow glowing" />
            <Star className="h-10 w-10 absolute -top-2 -right-2 text-accent-pink animate-sparkle" />
          </div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-pixel text-dark-blue mb-6 tracking-wider relative fancy-border px-6 py-2 inline-block">
          <span className="animate-pulse-rainbow">Happy Anniversary!</span>
          <div className="absolute -right-4 top-0 text-accent-pink animate-twinkle">★</div>
          <div className="absolute -left-4 bottom-0 text-accent-blue animate-twinkle" style={{ animationDelay: '1s' }}>★</div>
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
            Explore our memories and all the things that make us, <span className="text-accent-pink font-bold">us</span>.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Link to="/story">
            <PixelButton variant="blue" className="w-full group">
              <div className="flex items-center justify-center">
                <span className="mr-2 group-hover:animate-bounce-small inline-block">📖</span>
                Our Story
              </div>
            </PixelButton>
          </Link>
          <Link to="/gallery">
            <PixelButton variant="blue" className="w-full group">
              <div className="flex items-center justify-center">
                <span className="mr-2 group-hover:animate-bounce-small inline-block">📷</span>
                Photo Gallery
              </div>
            </PixelButton>
          </Link>
          <Link to="/letter">
            <PixelButton variant="candy" className="w-full group">
              <div className="flex items-center justify-center">
                <span className="mr-2 group-hover:animate-bounce-small inline-block">💌</span>
                Love Letter
              </div>
            </PixelButton>
          </Link>
          <Link to="/favorites" className="sm:col-span-1 md:col-span-2">
            <PixelButton variant="pink" className="w-full group">
              <div className="flex items-center justify-center">
                <span className="mr-2 group-hover:animate-bounce-small inline-block">💖</span>
                Our Favorites
              </div>
            </PixelButton>
          </Link>
          <Link to="/games">
            <PixelButton variant="blue" className="w-full group">
              <div className="flex items-center justify-center">
                <span className="mr-2 group-hover:animate-bounce-small inline-block">🎮</span>
                Love Games
              </div>
            </PixelButton>
          </Link>
        </div>
      </div>
      
      <div className="mt-16 text-center font-pixel text-xs md:text-sm text-dark-blue">
        <p>Created with 💖 for our special day</p>
        <p className="mt-2">May 3, 2025</p>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-pastel-lavender/50 to-transparent"></div>
    </div>
  );
};

export default Home;


import React, { useState, useEffect } from 'react';
import PixelButton from '../components/PixelButton';
import FloatingHearts from '../components/FloatingHearts';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const LoveLetter: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showFullLetter, setShowFullLetter] = useState(false);
  
  useEffect(() => {
    if (isOpen) {
      // After typewriter animation completes, show the full letter
      const timer = setTimeout(() => {
        setShowFullLetter(true);
      }, 7000); // Adjust based on your typewriter animation duration
      
      return () => clearTimeout(timer);
    }
  }, [isOpen]);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-blue/40 to-pastel-lavender star-bg pt-20 pb-10 px-4">
      <FloatingHearts />
      
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-blue mb-8 text-center pt-8">My Love Letter to You</h1>
        
        <div className="bg-white/90 backdrop-blur-sm rounded-lg retro-shadow pixel-border p-8 mb-10 relative">
          {!isOpen ? (
            <div className="text-center">
              <div className="mb-8">
                <Heart className="h-16 w-16 mx-auto text-accent-blue animate-pulse-soft" />
              </div>
              <h3 className="text-xl font-handwritten mb-4">A Special Message for You</h3>
              <p className="font-cute text-lg mb-8">Click the button below to open my heartfelt letter...</p>
              <PixelButton onClick={() => setIsOpen(true)} variant="blue">
                Open Letter ♥
              </PixelButton>
            </div>
          ) : (
            <div className="letter-content">
              <div className="text-right mb-4">
                <p className="font-cute text-accent-blue">May 3rd, 2025</p>
              </div>
              
              {!showFullLetter ? (
                <div className="mb-6">
                  <p className="font-cute text-lg mb-4">
                    <span className="typewriter-container">
                      <span className="typewriter">My Dearest,</span>
                    </span>
                  </p>
                  <p className="font-cute text-lg opacity-0">
                    As I sit down to write this letter, my heart is overflowing with love and gratitude.
                    It's been one year since we began this beautiful journey together...
                  </p>
                </div>
              ) : (
                <div className="mb-6 animate-fade-in">
                  <p className="font-cute text-lg mb-4">My Dearest,</p>
                  <p className="font-cute text-lg mb-4">
                    As I sit down to write this letter, my heart is overflowing with love and gratitude. 
                    It's been one year since we began this beautiful journey together, and what an incredible year it has been!
                  </p>
                  <p className="font-cute text-lg mb-4">
                    I still remember the butterflies I felt when we first met. Your smile lit up the room and I knew immediately 
                    that you were someone special. Little did I know that you would become my favorite person, my best friend, and my greatest adventure.
                  </p>
                  <p className="font-cute text-lg mb-4">
                    Through every laugh, every tear, every silly moment and every serious conversation, my love for you has only grown stronger. 
                    You've shown me what it means to be truly seen and accepted. You challenge me to be better while loving me exactly as I am.
                  </p>
                  <p className="font-cute text-lg mb-4">
                    This past year has given us so many beautiful memories: our first vacation, meeting each other's families, 
                    late-night conversations, early morning coffee runs, and countless moments that have become the foundation of our story.
                  </p>
                  <p className="font-cute text-lg mb-4">
                    I created this little digital space as a celebration of us — of our story so far and all the chapters yet to be written. 
                    I hope it makes you smile and reminds you of how incredibly special you are to me.
                  </p>
                  <p className="font-cute text-lg mb-4">
                    Thank you for choosing me, for loving me, and for making every day brighter simply by being in it. 
                    I love you more than words can express, and I can't wait to continue our adventure together.
                  </p>
                </div>
              )}
              
              <div className="text-right">
                <p className="font-handwritten text-xl text-accent-blue">With all my heart,</p>
                <p className="font-handwritten text-xl text-accent-blue">Your Name</p>
              </div>
            </div>
          )}
        </div>
        
        <div className="mt-8 flex justify-center">
          <Link to="/favorites">
            <PixelButton variant="yellow">Our Favorites</PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;

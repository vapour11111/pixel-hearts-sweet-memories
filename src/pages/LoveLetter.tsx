
import React, { useEffect, useState, useRef } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TwinklingStars from '../components/TwinklingStars';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';

const LoveLetter: React.FC = () => {
  const [isTyping, setIsTyping] = useState(true);
  const [letterContent, setLetterContent] = useState('');
  const letterRef = useRef<HTMLDivElement>(null);
  
  const fullLetter = `My Dearest,

One year ago today, our story began. It's been 365 days of laughter, growth, and unforgettable moments together.

I still remember our first date, how nervous I was, and how quickly that nervousness melted away when I saw your smile.

Every day with you has been a blessing. From our inside jokes that make no sense to anyone else, to the quiet moments we share just being together.

You've seen me at my best and my worst, and somehow you've loved me through it all.

Thank you for your patience, your kindness, and your love. Thank you for being exactly who you are.

I can't wait to see where our journey takes us next. Here's to many more years of us.

All my love,
Your Person 💙`;

  useEffect(() => {
    let currentIndex = 0;
    
    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentIndex < fullLetter.length) {
          setLetterContent(prev => prev + fullLetter[currentIndex]);
          currentIndex++;
          
          // Scroll the container to the bottom
          if (letterRef.current) {
            letterRef.current.scrollTop = letterRef.current.scrollHeight;
          }
        } else {
          setIsTyping(false);
          clearInterval(typingInterval);
        }
      }, 50);
      
      return () => clearInterval(typingInterval);
    }
  }, [isTyping]);

  const restartTypewriter = () => {
    setLetterContent('');
    setIsTyping(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-blue/50 to-pastel-lavender/80 pt-20 pb-10 px-4 bubble-bg">
      <FloatingHearts />
      <TwinklingStars />
      
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-blue mb-8 text-center relative">
          <Heart className="inline-block mr-2 h-8 w-8 text-accent-pink animate-pulse-soft" />
          Love Letter
          <Heart className="inline-block ml-2 h-8 w-8 text-accent-blue animate-pulse-soft" />
          <div className="absolute -top-2 -right-4 text-accent-pink animate-twinkle text-xl">★</div>
          <div className="absolute -bottom-2 -left-4 text-accent-blue animate-twinkle text-xl" style={{ animationDelay: '1s' }}>★</div>
        </h1>
        
        <div className="bg-white/90 backdrop-blur-sm p-8 rounded-lg retro-shadow pixel-border border-accent-pink mb-10">
          <div 
            ref={letterRef} 
            className="h-[400px] md:h-[500px] overflow-y-auto font-handwritten text-lg md:text-xl leading-relaxed mb-6 whitespace-pre-line"
          >
            {letterContent}
            {isTyping && <span className="inline-block w-2 h-4 bg-accent-pink animate-pulse ml-1"></span>}
          </div>
          
          <div className="flex justify-center gap-4 mt-6">
            <PixelButton onClick={restartTypewriter} variant="blue" disabled={isTyping}>
              <span className="flex items-center">
                <span className="mr-2">✉️</span>
                Read Again
              </span>
            </PixelButton>
            <PixelButton variant="candy">
              <span className="flex items-center">
                <span className="mr-2">💌</span>
                Send a Reply
              </span>
            </PixelButton>
          </div>
        </div>
        
        <div className="flex justify-center mt-8">
          <Link to="/">
            <PixelButton variant="blue">
              <span className="flex items-center">
                <span className="mr-2">🏠</span>
                Back Home
              </span>
            </PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoveLetter;

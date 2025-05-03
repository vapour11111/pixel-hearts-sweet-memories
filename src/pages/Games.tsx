
import React, { useState } from 'react';
import FloatingHearts from '../components/FloatingHearts';
import TwinklingStars from '../components/TwinklingStars';
import PixelButton from '../components/PixelButton';
import LoveQuiz from '../components/LoveQuiz';
import MemoryGame from '../components/MemoryGame';
import { Link } from 'react-router-dom';
import { Gamepad, Heart } from 'lucide-react';

type GameType = 'quiz' | 'memory' | null;

const Games: React.FC = () => {
  const [activeGame, setActiveGame] = useState<GameType>(null);

  return (
    <div className="min-h-screen bg-gradient-to-b from-accent-yellow/30 to-pastel-blue/50 bubble-bg pt-20 pb-10 px-4">
      <FloatingHearts />
      <TwinklingStars />
      
      <div className="container mx-auto max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-blue mb-8 text-center pt-8">
          <Gamepad className="inline-block mr-2 h-8 w-8 animate-pulse-soft" />
          Love Games
          <Heart className="inline-block ml-2 h-6 w-6 animate-pulse-soft" />
        </h1>
        
        {!activeGame ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-lg retro-shadow pixel-border p-6 text-center hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setActiveGame('quiz')}
            >
              <Heart className="h-12 w-12 mx-auto text-accent-pink mb-4" />
              <h3 className="text-xl font-pixel text-dark-blue mb-2">Love Quiz</h3>
              <p className="font-cute text-base mb-4">
                Test how well you know me with this fun quiz! Let's see if you can guess my answers!
              </p>
              <PixelButton variant="candy" onClick={() => setActiveGame('quiz')}>
                Play Quiz
              </PixelButton>
            </div>
            
            <div 
              className="bg-white/90 backdrop-blur-sm rounded-lg retro-shadow pixel-border p-6 text-center hover:scale-105 transition-transform cursor-pointer"
              onClick={() => setActiveGame('memory')}
            >
              <div className="flex justify-center mb-4">
                <div className="grid grid-cols-2 gap-1 w-12">
                  <div className="bg-accent-blue w-5 h-5 rounded"></div>
                  <div className="bg-accent-pink w-5 h-5 rounded"></div>
                  <div className="bg-accent-yellow w-5 h-5 rounded"></div>
                  <div className="bg-accent-blue w-5 h-5 rounded"></div>
                </div>
              </div>
              <h3 className="text-xl font-pixel text-dark-blue mb-2">Memory Game</h3>
              <p className="font-cute text-base mb-4">
                Find all the matching pairs of cute symbols! A game of memory just like our memories together!
              </p>
              <PixelButton variant="blue" onClick={() => setActiveGame('memory')}>
                Play Memory
              </PixelButton>
            </div>
          </div>
        ) : (
          <div className="mb-10">
            {activeGame === 'quiz' ? <LoveQuiz /> : <MemoryGame />}
            
            <div className="mt-6 text-center">
              <PixelButton variant="yellow" onClick={() => setActiveGame(null)} className="mx-auto">
                Back to Games
              </PixelButton>
            </div>
          </div>
        )}
        
        <div className="mt-8 flex justify-center">
          <Link to="/">
            <PixelButton variant="blue">
              Back Home
            </PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Games;

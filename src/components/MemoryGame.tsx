
import React, { useState, useEffect } from 'react';
import PixelButton from './PixelButton';
import { Heart, Star } from 'lucide-react';

// Define card types
interface Card {
  id: number;
  type: string;
  isFlipped: boolean;
  isMatched: boolean;
}

// Create initial cards
const createCards = (): Card[] => {
  const cardTypes = ['❤️', '💙', '💖', '💚', '💜', '⭐', '✨', '🌟'];
  
  // Create pairs
  const cards = [...cardTypes, ...cardTypes].map((type, index) => ({
    id: index,
    type,
    isFlipped: false,
    isMatched: false
  }));
  
  // Shuffle the cards
  return cards.sort(() => Math.random() - 0.5);
};

const MemoryGame: React.FC = () => {
  const [cards, setCards] = useState<Card[]>(createCards());
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  
  // Handle card click
  const handleCardClick = (id: number) => {
    // Ignore if already matched or more than 2 cards flipped
    if (
      cards.find(card => card.id === id)?.isMatched ||
      flippedCards.includes(id) ||
      flippedCards.length === 2
    ) {
      return;
    }
    
    // Flip the card
    const newCards = cards.map(card => 
      card.id === id ? { ...card, isFlipped: true } : card
    );
    
    const newFlippedCards = [...flippedCards, id];
    
    setCards(newCards);
    setFlippedCards(newFlippedCards);
    
    // Check for match if we have 2 cards
    if (newFlippedCards.length === 2) {
      setMoves(moves + 1);
      
      const firstCard = newCards.find(card => card.id === newFlippedCards[0]);
      const secondCard = newCards.find(card => card.id === newFlippedCards[1]);
      
      if (firstCard?.type === secondCard?.type) {
        // It's a match!
        setTimeout(() => {
          setCards(cards.map(card => 
            card.id === newFlippedCards[0] || card.id === newFlippedCards[1]
              ? { ...card, isMatched: true }
              : card
          ));
          setFlippedCards([]);
        }, 600);
      } else {
        // Not a match, flip back
        setTimeout(() => {
          setCards(cards.map(card => 
            card.id === newFlippedCards[0] || card.id === newFlippedCards[1]
              ? { ...card, isFlipped: false }
              : card
          ));
          setFlippedCards([]);
        }, 800);
      }
    }
  };
  
  // Check for game completion
  useEffect(() => {
    if (cards.every(card => card.isMatched) && cards.length > 0) {
      setIsComplete(true);
    }
  }, [cards]);
  
  // Reset game
  const resetGame = () => {
    setCards(createCards());
    setFlippedCards([]);
    setMoves(0);
    setIsComplete(false);
  };
  
  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg pixel-border border-accent-blue shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-pixel text-xl text-dark-blue">Memory Game</h3>
        <span className="font-pixel text-sm text-accent-blue">Moves: {moves}</span>
      </div>
      
      {isComplete ? (
        <div className="text-center">
          <div className="flex justify-center my-4 animate-float">
            <Heart className="h-10 w-10 text-accent-pink mx-2" />
            <Star className="h-10 w-10 text-accent-blue mx-2" />
            <Heart className="h-10 w-10 text-accent-blue mx-2" />
          </div>
          
          <p className="font-cute text-lg mb-4">
            You completed the game in <span className="text-accent-blue font-bold">{moves} moves</span>!
          </p>
          
          <p className="font-cute text-lg mb-6">
            {moves <= 12 ? "Amazing memory! Just like how I'll always remember our special moments!" :
             moves <= 16 ? "Great job! Your memory is as sweet as our time together!" :
             "Well done! Every move was worth it, just like our journey together!"}
          </p>
          
          <PixelButton onClick={resetGame} variant="blue">
            Play Again
          </PixelButton>
        </div>
      ) : (
        <div className="card-game">
          {cards.map(card => (
            <div
              key={card.id}
              className={`memory-card ${card.isFlipped || card.isMatched ? 'flipped' : ''}`}
              onClick={() => handleCardClick(card.id)}
            >
              <div className="card-face card-front">
                {card.isMatched && <div className="animate-pulse-rainbow absolute inset-0 rounded-lg"></div>}
              </div>
              <div className="card-face card-back">
                <span className="text-2xl">{card.type}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MemoryGame;

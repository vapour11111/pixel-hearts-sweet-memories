
import React, { useState } from 'react';
import PixelButton from './PixelButton';
import { Heart } from 'lucide-react';

interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
}

const questions: Question[] = [
  {
    question: "What's my favorite color?",
    options: ["Blue", "Yellow", "Pink", "Green"],
    correctAnswer: "Blue"
  },
  {
    question: "What food could I eat every day?",
    options: ["Pizza", "Sushi", "Pasta", "Tacos"],
    correctAnswer: "Sushi"
  },
  {
    question: "What's my dream vacation spot?",
    options: ["Beach", "Mountains", "Big City", "Countryside"],
    correctAnswer: "Beach"
  },
  {
    question: "What's my go-to comfort activity?",
    options: ["Reading", "Watching Movies", "Taking a Walk", "Cooking"],
    correctAnswer: "Watching Movies"
  },
  {
    question: "What makes me laugh the most?",
    options: ["Dad Jokes", "Puns", "Funny Videos", "Your Silly Antics"],
    correctAnswer: "Your Silly Antics"
  }
];

interface LoveQuizProps {
  onComplete?: (score: number) => void;
}

const LoveQuiz: React.FC<LoveQuizProps> = ({ onComplete }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleAnswerSelect = (answer: string) => {
    if (isAnswered) return;
    
    setSelectedAnswer(answer);
    setIsAnswered(true);
    
    if (answer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }
    
    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsAnswered(false);
      } else {
        setShowResult(true);
        if (onComplete) onComplete(score + (answer === questions[currentQuestion].correctAnswer ? 1 : 0));
      }
    }, 1000);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedAnswer(null);
    setIsAnswered(false);
  };

  const getResultMessage = () => {
    const finalScore = score;
    const percentage = (finalScore / questions.length) * 100;
    
    if (percentage === 100) return "Perfect! You know me so well! ♥";
    if (percentage >= 80) return "Amazing! Our hearts are truly connected!";
    if (percentage >= 60) return "Pretty good! We're definitely in tune with each other!";
    if (percentage >= 40) return "Not bad! We still have more to learn about each other!";
    return "That's okay! This just means we have more fun conversations ahead!";
  };

  if (showResult) {
    return (
      <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg pixel-border border-accent-blue shadow-lg text-center">
        <h3 className="font-pixel text-xl mb-4 text-dark-blue">Quiz Results</h3>
        
        <div className="flex justify-center mb-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <Heart 
              key={i}
              className={`h-8 w-8 mx-1 ${i < Math.ceil((score / questions.length) * 5) ? 
                'text-accent-pink animate-pulse-soft' : 'text-gray-200'}`} 
            />
          ))}
        </div>
        
        <p className="text-lg mb-2 font-cute">
          You scored <span className="text-accent-blue font-bold">{score} out of {questions.length}</span>
        </p>
        
        <p className="text-lg mb-6 font-cute">{getResultMessage()}</p>
        
        <PixelButton onClick={resetQuiz} variant="pink">
          Play Again
        </PixelButton>
      </div>
    );
  }

  return (
    <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg pixel-border border-accent-blue shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-pixel text-xl text-dark-blue">Love Quiz</h3>
        <span className="font-pixel text-sm text-accent-blue">
          {currentQuestion + 1}/{questions.length}
        </span>
      </div>
      
      <p className="text-lg mb-6 font-cute text-center">
        {questions[currentQuestion].question}
      </p>
      
      <div className="grid grid-cols-1 gap-3 mb-4">
        {questions[currentQuestion].options.map((option, index) => (
          <button
            key={index}
            onClick={() => handleAnswerSelect(option)}
            disabled={isAnswered}
            className={`p-3 rounded-md font-cute text-left transition-all ${
              isAnswered && option === questions[currentQuestion].correctAnswer
                ? 'bg-green-100 border-2 border-green-400'
                : isAnswered && option === selectedAnswer
                ? 'bg-red-100 border-2 border-red-400'
                : 'bg-white/70 hover:bg-white border-2 border-accent-blue/30 hover:border-accent-blue'
            }`}
          >
            {option}
            {isAnswered && option === questions[currentQuestion].correctAnswer && (
              <span className="ml-2">✓</span>
            )}
            {isAnswered && option === selectedAnswer && option !== questions[currentQuestion].correctAnswer && (
              <span className="ml-2">✗</span>
            )}
          </button>
        ))}
      </div>
      
      {isAnswered && (
        <div className="text-center my-2 font-cute">
          {selectedAnswer === questions[currentQuestion].correctAnswer ? (
            <p className="text-green-600">That's right!</p>
          ) : (
            <p className="text-red-600">My answer is: {questions[currentQuestion].correctAnswer}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LoveQuiz;

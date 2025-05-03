
import React from 'react';
import PixelButton from '../components/PixelButton';
import TwinklingStars from '../components/TwinklingStars';
import { Link } from 'react-router-dom';
import { Heart, Star, Flower, Gift, Cake, Calendar } from 'lucide-react';

const FavoriteItem: React.FC<{
  title: string;
  icon: React.ReactNode;
  yours: string;
  theirs: string;
}> = ({ title, icon, yours, theirs }) => {
  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-lg retro-shadow pixel-border p-4 md:p-6">
      <div className="flex items-center mb-4">
        <div className="mr-3">{icon}</div>
        <h3 className="text-xl font-handwritten text-dark-pink">{title}</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-pastel-cream rounded-lg p-3">
          <p className="text-sm font-pixel mb-2 text-accent-pink">You</p>
          <p className="font-cute">{yours}</p>
        </div>
        
        <div className="bg-pastel-lavender rounded-lg p-3">
          <p className="text-sm font-pixel mb-2 text-accent-pink">Me</p>
          <p className="font-cute">{theirs}</p>
        </div>
      </div>
    </div>
  );
};

const Favorites: React.FC = () => {
  const favorites = [
    {
      title: "Date Night",
      icon: <Heart className="h-6 w-6 text-accent-pink" />,
      yours: "Pizza and movie marathons at home",
      theirs: "Trying new restaurants downtown",
    },
    {
      title: "Sweet Treat",
      icon: <Cake className="h-6 w-6 text-accent-pink" />,
      yours: "Chocolate chip cookies, still warm from the oven",
      theirs: "Ice cream with sprinkles, especially on hot days",
    },
    {
      title: "Weekend Activity",
      icon: <Star className="h-6 w-6 text-accent-pink" />,
      yours: "Hiking and exploring new trails",
      theirs: "Lazy brunches followed by bookstore browsing",
    },
    {
      title: "Holiday",
      icon: <Gift className="h-6 w-6 text-accent-pink" />,
      yours: "Halloween - you love creating costumes!",
      theirs: "Christmas - I love the lights and traditions",
    },
    {
      title: "Flowers",
      icon: <Flower className="h-6 w-6 text-accent-pink" />,
      yours: "Sunflowers - bright and cheerful",
      theirs: "Peonies - romantic and fragrant",
    },
    {
      title: "Dream Vacation",
      icon: <Calendar className="h-6 w-6 text-accent-pink" />,
      yours: "Exploring Japanese temples and city lights",
      theirs: "Relaxing on a beach in the Mediterranean",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-blue to-pastel-cream heart-bg pt-20 pb-10 px-4">
      <TwinklingStars />
      
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-pink mb-8 text-center pt-8">Our Favorites</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {favorites.map((item, index) => (
            <FavoriteItem
              key={index}
              title={item.title}
              icon={item.icon}
              yours={item.yours}
              theirs={item.theirs}
            />
          ))}
        </div>
        
        <div className="text-center bg-white/90 backdrop-blur-sm rounded-lg retro-shadow pixel-border p-6">
          <h2 className="text-xl font-handwritten text-dark-pink mb-4">Our Shared Favorites</h2>
          <p className="font-cute text-lg mb-2">🎵 Song: "Our special song"</p>
          <p className="font-cute text-lg mb-2">📺 Show: "That series we binged in one weekend"</p>
          <p className="font-cute text-lg mb-2">🍽️ Meal: "That pasta dish we learned to cook together"</p>
          <p className="font-cute text-lg">💭 Memory: "Watching the sunset at our spot"</p>
        </div>
        
        <div className="mt-10 flex justify-center">
          <Link to="/">
            <PixelButton variant="candy">Back Home</PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Favorites;

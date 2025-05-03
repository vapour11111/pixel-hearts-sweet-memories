
import React from 'react';
import FloatingHearts from '../components/FloatingHearts';
import PixelButton from '../components/PixelButton';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const storyEvents = [
  {
    date: "May 3, 2024",
    title: "Our First Date",
    description: "We met at that little café downtown. I was so nervous, but your smile instantly put me at ease.",
    icon: <Heart className="w-6 h-6 text-accent-pink" />,
  },
  {
    date: "June 15, 2024",
    title: "First Trip Together",
    description: "Remember that spontaneous road trip to the beach? We got lost twice but found the most beautiful sunset spot.",
    icon: <Star className="w-6 h-6 text-accent-pink" />,
  },
  {
    date: "August 8, 2024",
    title: "Our Song",
    description: "At that summer concert, they played the song that would become ours. Now I smile every time I hear it.",
    icon: <Heart className="w-6 h-6 text-accent-pink" />,
  },
  {
    date: "October 31, 2024",
    title: "Halloween Together",
    description: "Our matching costumes were a hit! I've never laughed so hard as when you couldn't find the candy we bought.",
    icon: <Star className="w-6 h-6 text-accent-pink" />,
  },
  {
    date: "December 25, 2024",
    title: "First Christmas",
    description: "Meeting your family was wonderful. Your mom's cookies were amazing, and your dad's jokes weren't as bad as you warned.",
    icon: <Heart className="w-6 h-6 text-accent-pink" />,
  },
  {
    date: "February 14, 2025",
    title: "Valentine's Day",
    description: "You surprised me with breakfast in bed. I'll never forget how peaceful that morning felt.",
    icon: <Star className="w-6 h-6 text-accent-pink" />,
  },
];

const Story: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-pastel-blue to-pastel-lavender star-bg pt-20 pb-10 px-4">
      <FloatingHearts />
      
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-3xl md:text-4xl font-pixel text-dark-pink mb-8 text-center pt-8">Our Story Timeline</h1>
        
        <div className="relative">
          {/* Timeline center line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pastel-pink"></div>
          
          {/* Timeline events */}
          {storyEvents.map((event, index) => (
            <div 
              key={index} 
              className={`relative mb-12 ${index % 2 === 0 ? 'left-timeline' : 'right-timeline'}`}
            >
              <div className={`flex items-center ${index % 2 === 0 ? 'justify-end' : 'justify-start'} mb-4`}>
                <div className={`w-full md:w-2/5 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                  <p className="text-accent-pink font-pixel text-sm mb-1">{event.date}</p>
                  <h3 className="text-xl font-handwritten">{event.title}</h3>
                </div>
                
                <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full retro-shadow">
                  {event.icon}
                </div>
              </div>
              
              <div className={`flex ${index % 2 === 0 ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`w-full md:w-2/5 bg-white/90 backdrop-blur-sm p-4 rounded-lg retro-shadow pixel-border 
                  ${index % 2 === 0 ? 'mr-8 md:mr-16' : 'ml-8 md:ml-16'} 
                  ${index % 2 === 0 ? 'animate-float' : 'animate-pulse-soft'}`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <p className="font-cute text-lg">{event.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 flex justify-center">
          <Link to="/gallery">
            <PixelButton>See Our Photos</PixelButton>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Story;

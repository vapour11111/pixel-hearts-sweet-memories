
import React, { useState, useRef, useEffect } from 'react';
import { Play, Heart, Music } from 'lucide-react';
import PixelButton from './PixelButton';

// The URL would need to be replaced with an actual song file
const DEFAULT_SONG_URL = "https://pixabay.com/music/download/beautiful-light-piano-radar-136995/";

interface MusicPlayerProps {
  songUrl?: string;
  songTitle?: string;
}

const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  songUrl = DEFAULT_SONG_URL,
  songTitle = "Our Song"
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasPermission, setHasPermission] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    audioRef.current = new Audio(songUrl);
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, [songUrl]);

  const togglePlay = () => {
    if (!hasPermission) {
      setHasPermission(true);
    }

    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error("Audio playback failed:", error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isVisible ? (
        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-lg pixel-border border-accent-blue shadow-lg flex items-center gap-2">
          <Music className="text-accent-blue h-5 w-5 animate-pulse-soft" />
          <span className="font-pixel text-xs text-accent-blue hidden sm:inline">
            {songTitle}
          </span>
          <PixelButton 
            onClick={togglePlay} 
            className="!p-2 !min-w-0"
            variant={isPlaying ? "candy" : "blue"}
          >
            {isPlaying ? "❚❚" : <Play className="h-4 w-4" />}
          </PixelButton>
          <button 
            onClick={toggleVisibility} 
            className="text-xs text-accent-blue/60 hover:text-accent-blue ml-1"
          >
            ×
          </button>
        </div>
      ) : (
        <button
          onClick={toggleVisibility}
          className="bg-accent-blue/90 backdrop-blur-sm p-2 rounded-full shadow-lg hover:bg-accent-blue transition-colors"
        >
          <Music className="text-white h-5 w-5" />
        </button>
      )}
    </div>
  );
};

export default MusicPlayer;

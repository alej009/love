import React from 'react'; 
import { Heart } from 'lucide-react';

const PulsatingHeart: React.FC = () => {
  return (
    <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
      <div className="relative">
        {/* Heart Icon */}
        <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500 drop-shadow-lg animate-pulse-heart" />
        
        {/* Ripple Effects */}
        <div className="absolute inset-0 animate-ripple rounded-full border-4 border-pink-500/50 blur-sm" />
        <div className="absolute inset-0 animate-ripple-delayed rounded-full border-4 border-pink-300/30 blur-sm" />
        <div className="absolute inset-0 animate-ripple-far rounded-full border-4 border-pink-200/20 blur-md" />
      </div>
    </div>
  );
};

export default PulsatingHeart;

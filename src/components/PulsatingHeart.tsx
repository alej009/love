import React from 'react';
import { Heart } from 'lucide-react';

const PulsatingHeart: React.FC = () => {
  return (
    <div className="absolute -top-4 sm:-top-6 left-1/2 transform -translate-x-1/2">
      <div className="relative">
        <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-red-500 animate-pulse-heart" />
        <div className="absolute inset-0 animate-ripple rounded-full border-2 border-pink-500/30" />
        <div className="absolute inset-0 animate-ripple-delayed rounded-full border-2 border-pink-500/20" />
      </div>
    </div>
  );
};

export default PulsatingHeart;
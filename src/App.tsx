import React, { useState } from 'react';
import { Heart, HeartCrack, X, Music, Stars } from 'lucide-react';
import NoButton from './components/NoButton';
import ConfettiExplosion from './components/ConfettiExplosion';
import FloatingHearts from './components/FloatingHearts';
import HeartRain from './components/HeartRain';
import PulsatingHeart from './components/PulsatingHeart';

function App() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const phrases = [
    "No 😢",
    "¿Estás segura?",
    "¿Realmente segura?",
    "¡Piénsalo otra vez!",
    "¡Última oportunidad!",
    "¿Seguramente no?",
    "¡Te podrías arrepentir!",
    "¡Piénsalo bien!",
    "¿Estás absolutamente segura?",
    "¡Esto podría ser un error!",
    "¡Ten corazón!",
    "¡No seas tan fría!",
    "¿Cambio de opinión?",
    "¿No lo reconsiderarías?",
    "¿Es tu respuesta final?",
    "¡Estás rompiendo mi corazón 💔!"
  ];

  const getYesButtonSize = () => {
    const baseSize = window.innerWidth < 640 ? 14 : 16;
    return Math.min(noCount * 20 + baseSize, window.innerWidth < 640 ? 36 : 48);
  };

  const handleYesClick = () => {
    setYesPressed(true);
  };

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-red-100 via-pink-100 to-purple-100">
      <FloatingHearts />
      <HeartRain />
      
      <div className="absolute inset-0 bg-white/30 backdrop-blur-sm">
        <div className="flex flex-col items-center justify-center min-h-screen p-4 sm:p-6 md:p-8">
          {yesPressed ? (
            <div className="text-center w-full max-w-[95vw] sm:max-w-md mx-auto">
              <ConfettiExplosion />
              <div className="relative bg-white/80 backdrop-blur rounded-3xl p-4 sm:p-6 md:p-8 card-shadow transform hover:scale-105 transition-all duration-500">
                <PulsatingHeart />
                <Stars className="w-8 h-8 sm:w-12 sm:h-12 text-yellow-400 mx-auto mb-4 animate-spin-slow" />
                <h1 className="romantic-title text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6">¡Sí! 🎉</h1>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://media.giphy.com/media/MDJ9IbxxvDUQM/giphy.gif"
                    alt="Loving cats hugging"
                    className="w-full h-48 sm:h-64 object-cover transform transition-transform duration-500 hover:scale-102 shadow-lg"
                  />
                  <div className="absolute -bottom-4 -right-4">
                    <Music className="w-6 h-6 sm:w-8 sm:h-8 text-pink-500 animate-bounce" />
                  </div>
                </div>
                <p className="text-lg sm:text-xl text-gray-700 my-4 sm:my-6 leading-relaxed px-2 sm:px-4">
                  ¡Sabía que dirías que sí! ¡Este será el mejor San Valentín de todos! ❤️
                </p>
                <div className="flex justify-center space-x-2 sm:space-x-4">
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-500 animate-pulse" />
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-red-500 animate-bounce" />
                  <Heart className="w-12 h-12 sm:w-16 sm:h-16 text-pink-600 animate-pulse" />
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center w-full max-w-[95vw] sm:max-w-md mx-auto">
              <div className="relative bg-white/80 backdrop-blur rounded-3xl p-4 sm:p-6 md:p-8 card-shadow">
                <PulsatingHeart />
                <h1 className="romantic-title text-3xl sm:text-4xl md:text-5xl font-bold text-pink-600 mb-4 sm:mb-6 floating px-2">
                  ¿Quieres ser mi San Valentín?
                </h1>
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="https://media.giphy.com/media/cfuL5gqFDreXxkWQ4o/giphy.gif"
                    alt="Cute cats in love"
                    className="w-full h-48 sm:h-64 object-cover transform transition-transform duration-500 hover:scale-102 shadow-lg"
                  />
                  <div className="absolute -top-4 -right-4">
                    <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-pink-500 animate-pulse" />
                  </div>
                </div>
                <div className="flex flex-col gap-4 mt-6 sm:mt-8">
                  <button
                    className={`heart-button bg-gradient-to-r from-pink-500 to-red-500 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full shadow-lg mx-auto`}
                    style={{ fontSize: `${getYesButtonSize()}px` }}
                    onClick={handleYesClick}
                  >
                    ¡Sí! 💖
                  </button>
                  <NoButton
                    onClick={handleNoClick}
                    text={phrases[Math.min(noCount, phrases.length - 1)]}
                  />
                </div>
                {noCount > 0 && (
                  <div className="mt-4 sm:mt-6 text-gray-600">
                    {noCount >= phrases.length ? (
                      <div className="flex items-center justify-center gap-2">
                        <HeartCrack className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500 animate-pulse" />
                        <span className="text-base sm:text-lg">Por favor... solo di que sí 🥺</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <X className="w-5 h-5 sm:w-6 sm:h-6 text-pink-500" />
                        <span className="text-base sm:text-lg">Intentos de decir no: {noCount}</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
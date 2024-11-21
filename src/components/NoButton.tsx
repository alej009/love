import React, { useState, useEffect } from 'react';

interface NoButtonProps {
  onClick: () => void;
  text: string;
}

const NoButton: React.FC<NoButtonProps> = ({ onClick, text }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [maxDistance, setMaxDistance] = useState(150);

  useEffect(() => {
    const updateMaxDistance = () => {
      setMaxDistance(window.innerWidth < 640 ? 100 : 150);
    };

    updateMaxDistance();
    window.addEventListener('resize', updateMaxDistance);
    return () => window.removeEventListener('resize', updateMaxDistance);
  }, []);

  const handleMouseEnter = () => {
    const newX = Math.random() * maxDistance * 2 - maxDistance;
    const newY = Math.random() * maxDistance * 2 - maxDistance;
    setPosition({ x: newX, y: newY });
  };

  return (
    <button
      className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg relative text-sm sm:text-base mx-auto"
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onTouchStart={handleMouseEnter}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
        transition: 'transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)'
      }}
    >
      {text}
    </button>
  );
};

export default NoButton;
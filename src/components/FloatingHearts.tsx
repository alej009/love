import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

const FloatingHearts: React.FC = () => {
  const [heartCount, setHeartCount] = useState(30);

  useEffect(() => {
    const updateHeartCount = () => {
      setHeartCount(window.innerWidth < 640 ? 15 : 30);
    };

    updateHeartCount();
    window.addEventListener('resize', updateHeartCount);
    return () => window.removeEventListener('resize', updateHeartCount);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {[...Array(heartCount)].map((_, i) => (
        <Heart
          key={i}
          className="absolute text-pink-500 animate-pulse"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 10 + 5})`,
            animation: `floating ${Math.random() * 3 + 2}s ease-in-out infinite, disappear 4s ease-in-out infinite alternate`,
            opacity: 1,
            filter: `drop-shadow(0 0 10px rgba(255, 105, 180, 0.8))`,
            color: `hsl(${Math.random() * 360}, 80%, 60%)`,
          }}
        />
      ))}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-300 to-transparent" />
    </div>
  );
};

export default FloatingHearts;

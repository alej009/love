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
          className="absolute text-pink-500/20"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `scale(${Math.random() * 1.5 + 0.5})`,
            animation: `floating ${Math.random() * 3 + 2}s ease-in-out infinite`,
            animationDelay: `${Math.random() * 2}s`,
            opacity: Math.random() * 0.5 + 0.1
          }}
        />
      ))}
      <div className="fixed bottom-0 left-0 w-full h-32 bg-gradient-to-t from-pink-100/50 to-transparent" />
    </div>
  );
};

export default FloatingHearts;
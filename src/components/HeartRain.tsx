import React, { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

interface HeartProps {
  style: React.CSSProperties;
}

const HeartRain: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);
  const [interval, setIntervalTime] = useState(300);

  useEffect(() => {
    const updateInterval = () => {
      setIntervalTime(window.innerWidth < 640 ? 500 : 300);
    };

    updateInterval();
    window.addEventListener('resize', updateInterval);
    return () => window.removeEventListener('resize', updateInterval);
  }, []);

  useEffect(() => {
    const createHeart = () => {
      const heart: HeartProps = {
        style: {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          opacity: Math.random() * 0.7 + 0.3,
          transform: `scale(${Math.random() * 0.5 + 0.5})`
        }
      };
      setHearts(prev => [...prev, heart]);
      setTimeout(() => {
        setHearts(prev => prev.slice(1));
      }, 5000);
    };

    const intervalId = setInterval(createHeart, interval);
    return () => clearInterval(intervalId);
  }, [interval]);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart, index) => (
        <Heart
          key={index}
          className="absolute text-red-500/40 animate-heart-fall w-4 h-4 sm:w-6 sm:h-6"
          style={heart.style}
        />
      ))}
    </div>
  );
};

export default HeartRain;
import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";

interface HeartProps {
  style: React.CSSProperties;
}

const HeartRain: React.FC = () => {
  const [hearts, setHearts] = useState<HeartProps[]>([]);
  const [interval, setIntervalTime] = useState(200);

  useEffect(() => {
    const updateInterval = () => {
      setIntervalTime(window.innerWidth < 640 ? 300 : 200);
    };

    updateInterval();
    window.addEventListener("resize", updateInterval);
    return () => window.removeEventListener("resize", updateInterval);
  }, []);

  useEffect(() => {
    const createHeart = () => {
      const colors = ["#FF4D4D", "#FF69B4", "#FF1493", "#DB7093", "#FF4500"];
      const heart: HeartProps = {
        style: {
          left: `${Math.random() * 100}%`,
          animationDuration: `${Math.random() * 3 + 2}s`,
          opacity: Math.random() * 0.7 + 0.3,
          transform: `scale(${Math.random() * 2 + 1.5}) rotate(${Math.random() * 360}deg)`,
          color: colors[Math.floor(Math.random() * colors.length)],
          animation: 'fall 5s linear infinite',
        },
      };
      setHearts((prev) => [...prev, heart]);
      setTimeout(() => {
        setHearts((prev) => prev.slice(1));
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
          className="absolute"
          style={{
            ...heart.style,
            fontSize: "64px",
          }}
        />
      ))}
    </div>
  );
};

export default HeartRain;

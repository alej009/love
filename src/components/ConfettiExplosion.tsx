import React, { useEffect } from 'react';

const ConfettiExplosion: React.FC = () => {
  useEffect(() => {
    const colors = ['#ff69b4', '#ff1493', '#ff69b4', '#ff8da1', '#ffc0cb'];
    const confettiCount = 200;

    const createConfetti = () => {
      for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        
        confetti.style.cssText = `
          position: fixed;
          left: ${x}px;
          top: ${y}px;
          width: 10px;
          height: 10px;
          background-color: ${colors[Math.floor(Math.random() * colors.length)]};
          transform: rotate(${Math.random() * 360}deg);
          pointer-events: none;
          animation: fall 3s linear forwards;
        `;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => {
          confetti.remove();
        }, 3000);
      }
    };

    createConfetti();

    return () => {
      const confetti = document.querySelectorAll('[style*="animation: fall"]');
      confetti.forEach(c => c.remove());
    };
  }, []);

  return (
    <style>
      {`
        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 1;
          }
          100% {
            transform: translateY(100vh) rotate(720deg);
            opacity: 0;
          }
        }
      `}
    </style>
  );
};

export default ConfettiExplosion;
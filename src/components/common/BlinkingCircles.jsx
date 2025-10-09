// src/components/BlinkingCircles.jsx
import React, { useEffect, useState } from 'react';

const colors = ['#FECAEE', '#FEDAC9', '#FEEEEE'];

const BlinkingCircles = () => {
  const [circles, setCircles] = useState([]);

  useEffect(() => {
    // Generate initial circles on component mount
    const newCircles = [];
    const totalCircles = 5;
    const visibleAtOnce = 3;
    const duration = 4; // seconds, fixed for sync
    for (let i = 0; i < totalCircles; i++) {
      newCircles.push({
        id: i,
        size: Math.random() * 400 + 250, // Slightly smaller for more focus
        top: Math.random() * 80 + 10, // Avoid edges
        left: Math.random() * 80 + 10,
        // Stagger delays so only 3 are visible at a time
        delay: (i * duration) / visibleAtOnce,
        duration,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setCircles(newCircles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map(circle => (
        <div
          key={circle.id}
          className="absolute rounded-full animate-blink-faded"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            top: `${circle.top}%`,
            left: `${circle.left}%`,
            background: `radial-gradient(circle, ${circle.color} 30%, transparent 80%)`, // More color, less transparent
            animationDelay: `${circle.delay}s`,
            '--animation-duration': `${circle.duration}s`,
            opacity: 0,
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export default BlinkingCircles;
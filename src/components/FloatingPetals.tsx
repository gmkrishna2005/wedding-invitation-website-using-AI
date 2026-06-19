'use client';

import { useEffect, useState, useCallback } from 'react';

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Array<{
    id: number;
    left: string;
    delay: number;
    duration: number;
    size: number;
    rotation: number;
  }>>([]);

  const generatePetals = useCallback(() => {
    const newPetals = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      left: `${Math.random() * 100}%`,
      delay: Math.random() * 8,
      duration: 8 + Math.random() * 8,
      size: 12 + Math.random() * 12,
      rotation: Math.random() * 60,
    }));
    setPetals(newPetals);
  }, []);

  useEffect(() => {
    generatePetals();
    const interval = setInterval(generatePetals, 16000);
    return () => clearInterval(interval);
  }, [generatePetals]);

  return (
    <>
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="petal"
          style={{
            left: petal.left,
            top: '-20px',
            animationDelay: `${petal.delay}s`,
            animationDuration: `${petal.duration}s`,
          }}
        >
          <svg width={petal.size} height={petal.size} viewBox="0 0 20 20">
            <ellipse
              cx="10"
              cy="10"
              rx="5"
              ry="9"
              fill="#E8A317"
              opacity="0.5"
              transform={`rotate(${petal.rotation}, 10, 10)`}
            />
            <ellipse
              cx="10"
              cy="10"
              rx="3"
              ry="6"
              fill="#F5C542"
              opacity="0.3"
              transform={`rotate(${petal.rotation}, 10, 10)`}
            />
          </svg>
        </div>
      ))}
    </>
  );
}

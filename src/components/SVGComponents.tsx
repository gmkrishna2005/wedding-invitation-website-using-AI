import React from 'react';

export function GaneshaSilhouette({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 220" className={className} fill="currentColor">
      {/* Simplified elegant Ganesha silhouette */}
      <g transform="translate(100,110)">
        {/* Head circle */}
        <ellipse cx="0" cy="-55" rx="35" ry="38" />
        {/* Crown */}
        <path d="M-25,-90 Q-15,-110 0,-105 Q15,-110 25,-90 Q15,-98 0,-95 Q-15,-98 -25,-90Z" />
        <circle cx="0" cy="-105" r="5" />
        {/* Left ear */}
        <ellipse cx="-38" cy="-50" rx="15" ry="20" />
        {/* Right ear */}
        <ellipse cx="38" cy="-50" rx="15" ry="20" />
        {/* Trunk */}
        <path d="M-8,-30 Q-15,-10 -20,10 Q-25,25 -15,30 Q-10,32 -5,25 Q0,15 5,-5 Q8,-20 8,-30Z" />
        {/* Body */}
        <ellipse cx="0" cy="0" rx="40" ry="30" />
        {/* Lower body */}
        <ellipse cx="0" cy="25" rx="45" ry="25" />
        {/* Left arm */}
        <path d="M-38,-5 Q-55,-10 -60,0 Q-62,8 -55,10 Q-50,5 -40,5Z" />
        {/* Right arm holding modak */}
        <path d="M38,-5 Q55,-10 60,0 Q62,8 55,10 Q50,5 40,5Z" />
        <circle cx="62" cy="5" r="6" />
        {/* Left upper arm */}
        <path d="M-35,-15 Q-55,-25 -58,-15 Q-60,-8 -52,-5 Q-48,-12 -38,-10Z" />
        {/* Right upper arm holding axe */}
        <path d="M35,-15 Q55,-25 58,-15 Q60,-8 52,-5 Q48,-12 38,-10Z" />
        {/* Belly */}
        <ellipse cx="0" cy="15" rx="25" ry="18" opacity="0.3" />
        {/* Legs */}
        <path d="M-25,40 Q-30,60 -25,75 Q-20,80 -15,75 Q-18,60 -15,45Z" />
        <path d="M25,40 Q30,55 35,60 Q38,55 35,50 Q30,45 25,40Z" />
        {/* Tusk */}
        <path d="M8,-35 Q12,-28 10,-22" fill="none" stroke="currentColor" strokeWidth="3" />
        {/* Eyes */}
        <ellipse cx="-12" cy="-55" rx="4" ry="3" opacity="0.5" />
        <ellipse cx="12" cy="-55" rx="4" ry="3" opacity="0.5" />
      </g>
    </svg>
  );
}

export function MandalaPattern({ className = '' }: { className?: string }) {
  const petals = 12;
  return (
    <svg viewBox="0 0 400 400" className={className} fill="none" stroke="currentColor">
      <g transform="translate(200,200)">
        {/* Outer circle */}
        <circle r="180" strokeWidth="0.5" opacity="0.3" />
        <circle r="160" strokeWidth="0.5" opacity="0.25" />
        <circle r="140" strokeWidth="0.5" opacity="0.2" />
        <circle r="120" strokeWidth="0.5" opacity="0.3" />
        <circle r="80" strokeWidth="0.5" opacity="0.2" />
        <circle r="40" strokeWidth="0.5" opacity="0.3" />
        <circle r="20" strokeWidth="1" opacity="0.4" />
        
        {/* Petals layers */}
        {Array.from({ length: petals }).map((_, i) => (
          <g key={i} transform={`rotate(${(360 / petals) * i})`}>
            <ellipse cx="0" cy="-100" rx="15" ry="40" strokeWidth="0.5" opacity="0.15" />
            <ellipse cx="0" cy="-60" rx="8" ry="25" strokeWidth="0.5" opacity="0.2" />
            <ellipse cx="0" cy="-150" rx="12" ry="30" strokeWidth="0.5" opacity="0.1" />
            <line x1="0" y1="-20" x2="0" y2="-180" strokeWidth="0.3" opacity="0.1" />
          </g>
        ))}
        
        {/* Inner star pattern */}
        {Array.from({ length: 8 }).map((_, i) => (
          <g key={`star-${i}`} transform={`rotate(${(360 / 8) * i})`}>
            <path d="M0,-20 Q10,-35 0,-50 Q-10,-35 0,-20Z" strokeWidth="0.5" opacity="0.2" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export function DiyaLamp({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 60 80" className={className} fill="currentColor">
      {/* Flame */}
      <g>
        <ellipse cx="30" cy="18" rx="8" ry="16" fill="#FFB432" opacity="0.9" />
        <ellipse cx="30" cy="20" rx="5" ry="10" fill="#FFD700" opacity="0.7" />
        <ellipse cx="30" cy="22" rx="3" ry="6" fill="#FFF5D4" opacity="0.8" />
      </g>
      {/* Lamp body */}
      <path d="M15,35 Q10,40 12,50 Q14,55 20,57 L40,57 Q46,55 48,50 Q50,40 45,35 Z" fill="currentColor" />
      {/* Lamp base */}
      <rect x="22" y="57" width="16" height="4" rx="1" fill="currentColor" />
      <rect x="18" y="61" width="24" height="3" rx="1" fill="currentColor" />
      {/* Oil surface */}
      <ellipse cx="30" cy="38" rx="14" ry="4" opacity="0.3" />
    </svg>
  );
}

export function LotusIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 60" className={className} fill="currentColor">
      {/* Center petal */}
      <path d="M50,5 Q55,20 50,40 Q45,20 50,5Z" opacity="0.8" />
      {/* Left petals */}
      <path d="M50,40 Q35,25 30,10 Q40,20 50,40Z" opacity="0.6" />
      <path d="M50,40 Q25,30 15,18 Q30,28 50,40Z" opacity="0.4" />
      <path d="M50,42 Q18,35 5,28 Q22,33 50,42Z" opacity="0.3" />
      {/* Right petals */}
      <path d="M50,40 Q65,25 70,10 Q60,20 50,40Z" opacity="0.6" />
      <path d="M50,40 Q75,30 85,18 Q70,28 50,40Z" opacity="0.4" />
      <path d="M50,42 Q82,35 95,28 Q78,33 50,42Z" opacity="0.3" />
      {/* Base */}
      <path d="M30,45 Q50,55 70,45 Q50,50 30,45Z" opacity="0.5" />
    </svg>
  );
}

export function OrnamentalCorner({ position }: { position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' }) {
  const rotations = {
    'top-left': 'rotate(0)',
    'top-right': 'rotate(90)',
    'bottom-right': 'rotate(180)',
    'bottom-left': 'rotate(270)',
  };
  
  const positions = {
    'top-left': 'top-0 left-0',
    'top-right': 'top-0 right-0',
    'bottom-left': 'bottom-0 left-0',
    'bottom-right': 'bottom-0 right-0',
  };

  return (
    <div className={`ornamental-corner absolute ${positions[position]}`}>
      <svg viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="1" style={{ transform: rotations[position] }}>
        <path d="M5,5 Q5,30 30,30" opacity="0.6" />
        <path d="M5,5 Q5,20 20,20" opacity="0.4" />
        <path d="M10,5 Q10,35 35,35" opacity="0.3" />
        <circle cx="5" cy="5" r="3" fill="currentColor" opacity="0.5" />
      </svg>
    </div>
  );
}

export function GoldDivider({ wide = false }: { wide?: boolean }) {
  return <div className={wide ? 'gold-divider-wide' : 'gold-divider'} />;
}

export function OmSymbol({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="currentColor">
      <text x="50" y="70" textAnchor="middle" fontSize="60" fontFamily="serif">ॐ</text>
    </svg>
  );
}

export function MarigoldPetal({ style }: { style: React.CSSProperties }) {
  return (
    <div className="petal" style={style}>
      <svg width="20" height="20" viewBox="0 0 20 20">
        <ellipse cx="10" cy="10" rx="6" ry="10" fill="#E8A317" opacity="0.7" transform="rotate(15, 10, 10)" />
        <ellipse cx="10" cy="10" rx="4" ry="8" fill="#F5C542" opacity="0.5" transform="rotate(15, 10, 10)" />
      </svg>
    </div>
  );
}

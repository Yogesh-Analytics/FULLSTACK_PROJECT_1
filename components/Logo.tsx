import React from 'react';

export const Logo: React.FC<{ className?: string }> = ({ className = "h-12" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* 
        High-fidelity replica of the Arkin 'K' Logo 
        Using multi-stop gradients for a sharp metallic look.
      */}
      <svg 
        width="48" 
        height="48" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg" 
        className="shrink-0"
        aria-label="Arkin Spaces Logo"
      >
        <defs>
          {/* A sharper, more metallic gold gradient simulating light reflection */}
          <linearGradient id="sharpGold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#B68D40" />
            <stop offset="30%" stopColor="#F4E4A0" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="70%" stopColor="#B68D40" />
            <stop offset="100%" stopColor="#8A6E2F" />
          </linearGradient>
        </defs>
        
        {/* Background Outline Wireframe - Thin & Sharp */}
        {/* Left tall building outline */}
        <path d="M30 85 V35 L42 28" stroke="#D4AF37" strokeWidth="0.5" />
        {/* Right shorter building outline */}
        <path d="M72 85 V25 L58 32" stroke="#D4AF37" strokeWidth="0.5" />
        {/* Ground line */}
        <path d="M20 85 H80" stroke="#D4AF37" strokeWidth="1" strokeLinecap="square" />

        {/* The 'K' Structure - Solid Metallic Shapes with sharp angles */}
        
        {/* Vertical Pillar (Left) */}
        <path 
          d="M36 84 V35 L44 30 V84 H36Z" 
          fill="url(#sharpGold)" 
        />
        
        {/* Top Angled Arm - Sharper point */}
        <path 
          d="M44 48 L68 22 L76 26 L52 56 Z" 
          fill="url(#sharpGold)" 
        />
        
        {/* Bottom Angled Arm */}
        <path 
          d="M52 58 L72 84 H62 L46 64 Z" 
          fill="url(#sharpGold)" 
        />
      </svg>
      
      <div className="flex flex-col justify-center">
        <span className="text-2xl font-bold tracking-[0.15em] text-current font-sans leading-none">ARKIN</span>
        <span className="text-[0.6rem] tracking-[0.38em] text-arkin-gold uppercase font-sans font-medium pl-[2px] mt-1 leading-none">SPACES</span>
      </div>
    </div>
  );
};
import { useEffect, useState } from "react";

interface NumberCardProps {
  finalNumber: number;
  isSpinning: boolean;
  delay?: number;
}

const NumberCard = ({ finalNumber, isSpinning, delay = 0 }: NumberCardProps) => {
  const [displayNumber, setDisplayNumber] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (isSpinning && !hasStarted) {
      
      const startTimeout = setTimeout(() => {
        setHasStarted(true);
      }, delay);

      return () => clearTimeout(startTimeout);
    }
  }, [isSpinning, delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    if (isSpinning) {
       
      const interval = setInterval(() => {
        setDisplayNumber(Math.floor(Math.random() * 10));
      }, 100);

      return () => clearInterval(interval);
    } else {
      
      setDisplayNumber(finalNumber);
      setHasStarted(false);
    }
  }, [isSpinning, finalNumber, hasStarted]);

  return (
    <div className="relative group">
      <div className="relative 
                    w-12 h-20 
                    xs:w-16 xs:h-24 
                    sm:w-22 sm:h-32 
                    md:w-24 md:h-36 
                    lg:w-28 lg:h-40 
                    xl:w-32 xl:h-48 
                    glass-panel rounded-lg sm:rounded-xl
                    flex items-center justify-center
                    overflow-hidden
                    transform transition-all duration-500
                    group-hover:scale-105 group-hover:shadow-[0_0_30px_rgba(138,43,226,0.4)]">
        <div className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `
                 linear-gradient(rgba(226, 43, 43, 0.15) 1px, transparent 1px),
                 linear-gradient(90deg, rgba(226, 43, 43, 0.15) 1px, transparent 1px)
               `,
            backgroundSize: '10px 10px'
          }} />
        <span className={`
          relative z-10 
          text-3xl 
          xs:text-4xl 
          sm:text-6xl 
          md:text-6xl 
          lg:text-7xl 
          xl:text-7xl 
          font-black
          bg-gradient-to-b from-[#00f0ff] to-[#0066ff] bg-clip-text text-transparent italic
          drop-shadow-[0_0_10px_rgba(0,240,255,0.8)]
          ${isSpinning && hasStarted ? 'animate-pulse' : 'animate-fade-in-up'}
        `}
          style={{
            fontFamily: "'Orbitron', sans-serif",
            WebkitTextStroke: "2px rgba(0, 240, 255, 0.5)"
          }}>
          {displayNumber}
        </span>
      </div>
      <div className="absolute 
                    -bottom-4 xs:-bottom-5 sm:-bottom-7 md:-bottom-7 lg:-bottom-8 
                    left-1/2 -translate-x-1/2 
                    w-16 h-4 
                    xs:w-20 xs:h-5 
                    sm:w-26 sm:h-7 
                    md:w-28 md:h-8 
                    lg:w-32 lg:h-9 
                    xl:w-36 xl:h-10">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-4 rounded-[100%] 
                      bg-gradient-to-b from-[#1a0033] to-[#0a001a] 
                      border-2 border-purple-500/30
                      shadow-[0_0_20px_rgba(138,43,226,0.4)]" />
        <div className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-[92%] h-2.5 rounded-[100%] 
                      bg-gradient-to-b from-[#220044] to-[#1a0033] 
                      border border-purple-500/35
                      shadow-[0_0_18px_rgba(138,43,226,0.45)]" />
        <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-[84%] h-2.5 rounded-[100%] 
                      bg-gradient-to-b from-[#2a0055] to-[#1a0033] 
                      border border-purple-400/40
                      shadow-[0_0_15px_rgba(138,43,226,0.5)]" />
        <div className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-[76%] h-2 rounded-[100%] 
                      bg-gradient-to-b from-[#3a0066] to-[#2a0055] 
                      border border-purple-300/45
                      shadow-[0_0_12px_rgba(138,43,226,0.55)]" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[68%] h-2 rounded-[100%] 
                      bg-gradient-to-b from-[#4a0088] to-[#2a0055] 
                      border border-purple-300/50
                      shadow-[0_0_10px_rgba(138,43,226,0.6)]" />
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 w-[60%] h-1.5 rounded-[100%] 
                      bg-gradient-to-b from-[#5a00aa] to-[#3a0066] 
                      border border-purple-200/55
                      shadow-[0_0_8px_rgba(138,43,226,0.65)]" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 
                      w-10 xs:w-12 sm:w-16 
                      h-24 xs:h-28 sm:h-36 md:h-40 lg:h-44 xl:h-48
                      bg-gradient-to-t from-[#0066ff]/20 via-[#0066ff]/15 to-transparent
                      blur-lg pointer-events-none" />
      </div>
      <div className="absolute 
                    -bottom-5 xs:-bottom-6 sm:-bottom-8 
                    left-0 w-full 
                    h-2 xs:h-3 sm:h-5 
                    bg-black/50 blur-md rounded-[100%] transform scale-x-100" />
    </div >
  );
};

export default NumberCard;

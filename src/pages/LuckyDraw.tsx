import { useState } from "react";
import NumberCard from "../components/NumberCard";
import { Button } from "../components/ui/button";

const LuckyDraw = () => {
  const [numbers, setNumbers] = useState<number[]>([1, 2, 3, 4, 5, 6]);
  const [isSpinning, setIsSpinning] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleSpin = () => {
    if (isSpinning) return;

    setShowCongrats(false);
    setIsSpinning(true);

    const newNumbers = Array.from({ length: 6 }, () => Math.floor(Math.random() * 10));

    setTimeout(() => {
      setNumbers(newNumbers);
      setIsSpinning(false);
      setShowCongrats(true);
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center 
                    px-3 py-8 
                    xs:px-4 xs:py-10 
                    sm:p-6 
                    md:p-8 
                    lg:p-10 
                    relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-neon-cyan/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="relative z-10 w-full max-w-7xl mx-auto 
                   space-y-4 xs:space-y-6 sm:space-y-8 md:space-y-10 
                   flex flex-col items-center">
        <div className="text-center space-y-6 relative">
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            <div className="relative w-[110%] h-full">
              <div className="circuit-line w-16 h-[2px] top-2 left-0 bg-neon-cyan shadow-[0_0_5px_#00f0ff]" />
              <div className="circuit-line w-[2px] h-8 top-2 left-16 origin-top transform -rotate-45" />
              <div className="circuit-dot top-[34px] left-[86px]" />
              <div className="circuit-line w-16 h-[2px] bottom-2 right-0 bg-neon-cyan shadow-[0_0_5px_#00f0ff]" />
              <div className="circuit-line w-[2px] h-8 bottom-2 right-16 origin-bottom transform -rotate-45" />
              <div className="circuit-dot bottom-[34px] right-[86px]" />
              <div className="circuit-dot top-2 left-0" />
              <div className="circuit-dot bottom-2 right-0" />
            </div>
          </div>
          <h1 className="text-2xl 
                       xs:text-3xl 
                       sm:text-4xl 
                       md:text-5xl 
                       lg:text-6xl 
                       xl:text-7xl 
                       congrats-text animate-fade-in-up"
            data-text="CONGRATULATION">
            CONGRATULATION
          </h1>
          <div className="h-1 w-full max-w-md mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
        </div>
        {showCongrats && (
          <h2 className="text-xl 
                       xs:text-2xl 
                       sm:text-3xl 
                       md:text-4xl 
                       lg:text-5xl 
                       xl:text-6xl 
                       prize-text animate-fade-in-up 
                       mt-2 xs:mt-3 sm:mt-4">
            1ST PRIZE
          </h2>
        )}
        <div className="relative w-full flex justify-center perspective-[1000px] 
                      mt-4 xs:mt-6 sm:mt-8">
          <div className="relative z-10 flex flex-nowrap justify-center 
                       gap-2 xs:gap-3 sm:gap-4 md:gap-6 lg:gap-7 xl:gap-8 
                       px-2 xs:px-3 sm:px-4 md:px-6 
                       py-8 xs:py-10 sm:py-12">
            {numbers.map((num, index) => (
              <NumberCard
                key={index}
                finalNumber={num}
                isSpinning={isSpinning}
                delay={index * 100}
              />
            ))}
          </div>
          <div className="absolute 
                       bottom-[-10px] 
                       left-1/2 -translate-x-1/2 
                       w-[140%] xs:w-[130%] sm:w-[100%] 
                       h-16 xs:h-20 sm:h-20 
                       border border-neon-purple/30 rounded-[100%] 
                       bg-neon-purple/5 transform rotate-x-[90deg] pointer-events-none" />
        </div>
        <div className="relative z-20 
                      pt-6 xs:pt-8 sm:pt-10 md:pt-10 
                      w-full flex justify-center">
          <div className="relative">
            <div className="hidden xs:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-full 
                          w-16 xs:w-24 sm:w-32 md:w-48 lg:w-64 
                          items-center pointer-events-none">
              <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-neon-purple/50 to-neon-purple shadow-[0_0_5px_rgba(138,43,226,0.5)]" />
              <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(138,43,226,0.8)] -ml-1" />
            </div>
            <div className="hidden xs:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-full 
                          w-16 xs:w-24 sm:w-32 md:w-48 lg:w-64 
                          items-center flex-row-reverse pointer-events-none">
              <div className="w-full h-[2px] bg-gradient-to-l from-transparent via-neon-purple/50 to-neon-purple shadow-[0_0_5px_rgba(138,43,226,0.5)]" />
              <div className="w-2 h-2 rounded-full bg-neon-purple shadow-[0_0_8px_rgba(138,43,226,0.8)] -mr-1" />
            </div>
            <Button
              onClick={handleSpin}
              disabled={isSpinning}
              className="neon-button relative 
                       px-6 py-3 
                       xs:px-8 xs:py-4 
                       sm:px-10 sm:py-5 
                       md:px-12 md:py-6 
                       lg:px-14 lg:py-7 
                       text-lg 
                       xs:text-xl 
                       sm:text-2xl 
                       md:text-2xl 
                       lg:text-3xl 
                       font-black text-white 
                       rounded-lg sm:rounded-xl 
                       border-none overflow-visible group 
                       transition-all duration-300 ease-out 
                       active:scale-95 active:translate-y-0 
                       text-[#ffff1a]"
            >
              SPIN
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuckyDraw;

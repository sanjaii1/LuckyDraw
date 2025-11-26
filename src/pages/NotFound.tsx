import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 tech-grid opacity-30 pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-neon-purple/20 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center space-y-6">
        <h1 className="text-8xl md:text-9xl font-black congrats-text" data-text="404">
          404
        </h1>
        <p className="text-2xl md:text-3xl text-neon-cyan font-bold" style={{ fontFamily: "'Orbitron', sans-serif" }}>
          Page Not Found
        </p>
        <div className="h-1 w-64 mx-auto bg-gradient-to-r from-transparent via-neon-cyan to-transparent opacity-50" />
        <a
          href="/"
          className="inline-block mt-8 px-8 py-4 text-xl font-bold text-white neon-button rounded-lg transition-all duration-300 hover:scale-105"
        >
          Return Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

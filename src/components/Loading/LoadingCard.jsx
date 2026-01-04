import { Film, Sparkles } from "lucide-react";

const LoadingCard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] space-y-6 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Spinner Container */}
      <div className="relative flex items-center justify-center">
        {/* Outer Rotating Ring */}
        <div className="absolute w-32 h-32 rounded-full border-2 border-cyan-500/20 animate-spin" style={{ animationDuration: '3s' }} />
        
        {/* Middle Rotating Ring */}
        <div className="absolute w-28 h-28 rounded-full border-2 border-blue-500/30 border-dashed animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }} />

        {/* Main Spinner */}
        <div className="relative">
          {/* Glow Effect */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 blur-xl opacity-30 animate-pulse" />
          
          {/* Spinner */}
          <div className="relative animate-spin rounded-full h-20 w-20 border-4 border-t-4 border-b-4 border-blue-500 border-t-transparent shadow-2xl" />
          
          {/* Center Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <Film className="w-8 h-8 text-cyan-400 animate-pulse" />
          </div>
        </div>

        {/* Orbiting Dots */}
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full shadow-lg animate-spin"
            style={{
              animationDuration: '2s',
              left: `calc(50% + ${Math.cos((i * 90 * Math.PI) / 180) * 50}px)`,
              top: `calc(50% + ${Math.sin((i * 90 * Math.PI) / 180) * 50}px)`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      {/* Loading Text */}
      <div className="flex items-center gap-2 animate-pulse relative z-10">
        <Sparkles className="w-5 h-5 text-cyan-400" />
        <p className="text-gray-600 text-lg font-medium bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
          Loading amazing content...
        </p>
        <Sparkles className="w-5 h-5 text-blue-400" />
      </div>

      {/* Skeleton Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5 w-full max-w-[1250px] px-4 relative z-10">
        {[...Array(6)].map((_, idx) => (
          <div
            key={idx}
            className="relative group"
            style={{ animationDelay: `${idx * 100}ms` }}
          >
            {/* Card Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
            
            {/* Main Skeleton Card */}
            <div className="relative h-40 md:h-48 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-800 rounded-xl overflow-hidden border border-cyan-500/10 shadow-xl">
              {/* Shimmer Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent animate-shimmer" />
              
              {/* Top Section - Image Placeholder */}
              <div className="h-3/4 bg-slate-700/50 relative overflow-hidden">
                {/* Animated Lines Pattern */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
                  color: '#00c6ff'
                }} />
                
                {/* Center Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="p-3 bg-slate-800/50 rounded-full border border-cyan-500/20 backdrop-blur-sm animate-pulse">
                    <Film className="w-6 h-6 text-cyan-400/40" />
                  </div>
                </div>
              </div>

              {/* Bottom Section - Text Placeholder */}
              <div className="h-1/4 p-3 space-y-2 bg-slate-800/30 backdrop-blur-sm">
                {/* Title Bar */}
                <div className="h-3 bg-slate-600/50 rounded-full w-3/4 animate-pulse" />
                {/* Subtitle Bar */}
                <div className="h-2 bg-slate-600/30 rounded-full w-1/2 animate-pulse" style={{ animationDelay: '0.2s' }} />
              </div>

              {/* Corner Accents */}
              <div className="absolute top-2 left-2 w-6 h-6 border-t-2 border-l-2 border-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-2 right-2 w-6 h-6 border-b-2 border-r-2 border-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Pulse Wave Effect */}
              <div className="absolute inset-0 border-2 border-cyan-500/0 rounded-xl group-hover:border-cyan-500/20 transition-all duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Progress Indicator */}
      <div className="w-full max-w-xs h-1 bg-slate-700 rounded-full overflow-hidden relative z-10">
        <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 animate-progress" />
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-progress {
          animation: progress 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LoadingCard;
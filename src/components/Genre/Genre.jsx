import { FaFilm, FaGhost, FaHeart, FaBolt, FaLaugh, FaDragon } from "react-icons/fa";
import { Sparkles, Grid3x3 } from "lucide-react";

const genres = [
  { name: "Action", icon: <FaBolt /> },
  { name: "Romance", icon: <FaHeart /> },
  { name: "Horror", icon: <FaGhost /> },
  { name: "Comedy", icon: <FaLaugh /> },
  { name: "Fantasy", icon: <FaDragon /> },
  { name: "Drama", icon: <FaFilm /> },
];

export default function Genre() {
  const getGenreColors = (index) => {
    const colorSchemes = [
      { gradient: "from-orange-600 via-red-600 to-pink-600", glow: "orange-500", accent: "yellow-400" },
      { gradient: "from-pink-600 via-rose-600 to-red-600", glow: "pink-500", accent: "rose-300" },
      { gradient: "from-purple-800 via-indigo-900 to-black", glow: "purple-500", accent: "purple-300" },
      { gradient: "from-yellow-500 via-orange-500 to-red-500", glow: "yellow-500", accent: "yellow-200" },
      { gradient: "from-purple-600 via-indigo-600 to-blue-600", glow: "purple-500", accent: "indigo-300" },
      { gradient: "from-slate-700 via-slate-800 to-slate-900", glow: "slate-500", accent: "slate-300" },
    ];
    return colorSchemes[index % colorSchemes.length];
  };

  return (
    <div className="mb-10 md:mb-20 relative overflow-hidden">
      {/* Section Header */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30">
            <Grid3x3 className="w-4 h-4 text-cyan-400" />
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent rounded-full" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Explore by Genre
        </h3>
      </div>

      {/* Genre Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {genres.map((genre, index) => {
          const colors = getGenreColors(index);
          return (
            <div
              key={index}
              className="relative group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Main Card */}
              <div className="relative overflow-hidden rounded-2xl border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-2xl">
                {/* Animated Gradient Background */}
                <div
                  className="absolute inset-0 opacity-90"
                  style={{
                    background: `linear-gradient(-45deg, #ff3d77, #3a1c71, #00c9ff, #92fe9d)`,
                    backgroundSize: "400% 400%",
                    animation: "gradientAnimation 8s ease infinite",
                  }}
                />

                {/* Overlay Pattern */}
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)`,
                  color: 'white'
                }} />

                {/* Content Container */}
                <div className="relative flex flex-col items-center justify-center p-6 md:p-8 min-h-[160px] md:min-h-[180px]">
                  {/* Icon Container with Pulse Ring */}
                  <div className="relative mb-4">
                    {/* Pulse Rings */}
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-ping" />
                    <div className="absolute inset-0 rounded-full bg-white/10 animate-pulse" />
                    
                    {/* Icon Background */}
                    <div className={`relative p-4 md:p-5 rounded-full bg-white/20 backdrop-blur-sm border-2 border-white/40 group-hover:border-${colors.accent} group-hover:bg-white/30 transition-all duration-300`}>
                      <div className="text-4xl md:text-5xl text-white group-hover:scale-125 group-hover:rotate-12 transition-all duration-500 drop-shadow-2xl">
                        {genre.icon}
                      </div>
                    </div>

                    {/* Floating Particles */}
                    <div className="absolute -top-2 -right-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce" />
                    <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce delay-100" />
                  </div>

                  {/* Genre Name */}
                  <span className="relative text-lg md:text-xl font-bold text-white tracking-wider uppercase drop-shadow-lg group-hover:scale-110 transition-transform duration-300">
                    {genre.name}
                  </span>

                  {/* Underline Effect */}
                  <div className="mt-3 h-1 w-0 bg-white/60 rounded-full group-hover:w-20 transition-all duration-500" />

                  {/* Corner Brackets */}
                 
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Decorative Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full" />

      <style>{`
        @keyframes gradientAnimation {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
}
import { use } from "react";
import { Star, Crown, } from "lucide-react";

const TopRatedMovies = ({ totalMovies }) => {
  const allMovies = use(totalMovies);
  const movies = allMovies.sort((a, b) => b.rating - a.rating).slice(0, 5);

  const getRankColor = (index) => {
    switch(index) {
      case 0: return "from-yellow-500/30 to-amber-500/30 border-yellow-500/40";
      case 1: return "from-gray-400/30 to-slate-400/30 border-gray-400/40";
      case 2: return "from-amber-600/30 to-orange-600/30 border-amber-600/40";
      default: return "from-cyan-500/30 to-blue-500/30 border-cyan-500/40";
    }
  };

  return (
    <div className="mb-10 md:mb-20 relative">
      {/* Background Decorative Elements */}
      

      {/* Section Header */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30">
            <Star className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <Crown className="w-4 h-4 text-yellow-400" />
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent rounded-full" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Top Rated Movies
        </h3>
      </div>

      {/* Movies Grid */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-4">
        {movies.map((movie, index) => (
          <div
            key={movie._id}
            className="group relative"
          >
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl overflow-hidden border border-cyan-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-500/40">
              {/* Rating Badge */}
              {movie.rating && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-yellow-500/40">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-yellow-100">{movie.rating}</span>
                  </div>
                </div>
              )}

              {/* Image Container */}
              <div className="relative h-[280px] overflow-hidden">


                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                {/* Hover Info Overlay */}
                <div className="absolute inset-0 flex items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="w-full p-4 bg-gradient-to-t from-black via-black/90 to-transparent">
                    {movie.genre && (
                      <span className="inline-block px-2 py-1 text-xs font-semibold text-cyan-300 bg-cyan-500/20 rounded-full border border-cyan-500/30 mb-2">
                        {movie.genre}
                      </span>
                    )}
                    {movie.year && (
                      <p className="text-xs text-gray-400">Released: {movie.year}</p>
                    )}
                  </div>
                </div>

                {/* Shine Effect on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </div>
              </div>

              {/* Title Section */}
              <div className="relative p-4 bg-gradient-to-b from-slate-800/50 to-slate-900/50 backdrop-blur-sm">
                <h2 className="font-bold text-base text-white line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {movie.title}
                </h2>
                
                {/* Bottom Accent Line */}
                <div className={`mt-3 h-1 bg-gradient-to-r ${getRankColor(index)} rounded-full w-0 group-hover:w-full transition-all duration-500`} />
              </div>

              {/* Corner Decorations */}
              <div className="absolute top-0 right-0 w-12 h-12 border-t border-r border-cyan-500/20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-12 h-12 border-b border-l border-cyan-500/20 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full" />
    </div>
  );
};

export default TopRatedMovies;
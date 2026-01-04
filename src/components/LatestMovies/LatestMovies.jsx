import { use } from "react";
import { Clock, Calendar, Sparkles, Zap } from "lucide-react";

const LatestMovies = ({ totalMovies }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  const allMovies = use(totalMovies);
  const movies = allMovies.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt)).slice(0, 6);

  const getNewBadgeColor = (index) => {
    if (index === 0) return "from-red-500 to-pink-500";
    if (index === 1) return "from-orange-500 to-amber-500";
    if (index === 2) return "from-yellow-500 to-orange-500";
    return "from-cyan-500 to-blue-500";
  };

  return (
    <div className="pb-10 md:pb-20 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-1/3 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Section Header */}
      <div className="relative mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30 animate-pulse">
            <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent rounded-full" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Latest Movies
        </h3>
      </div>

      {/* Movies Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-6 gap-4 md:gap-4">
        {movies.map((movie) => (
          <div
            key={movie._id}
            className="group relative"
          >
            {/* Main Card */}
            <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 transition-all duration-500  group-hover:border-cyan-500/50 group-hover:shadow-2xl">
              
              {/* Image Container */}
              <div className="relative h-48 md:h-64 overflow-hidden">
                <img
                  src={movie.posterUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />

              </div>

              {/* Content Section */}
              <div className="relative p-3 md:p-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm">
                {/* Title */}
                <h2 className="font-bold text-sm md:text-base text-white mb-2 line-clamp-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {movie.title}
                </h2>

                {/* Date Section */}
                <div className="flex items-center gap-2 text-xs md:text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  <span className="font-medium">{formatDate(movie.addedAt)}</span>
                </div>

                {/* Progress Bar Animation */}
                <div className="mt-3 h-1 bg-slate-700/50 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full w-0 group-hover:w-full transition-all duration-1000 ease-out" />
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Bottom Decorative Line */}
      <div className="mt-8 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full" />

      <style>{`
        @keyframes scan {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(400%);
          }
        }
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default LatestMovies;
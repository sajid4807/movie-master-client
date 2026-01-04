import { FaStar } from "react-icons/fa";
import { Link } from "react-router";
import { Film, Calendar, Sparkles } from "lucide-react";

const Movies = ({ movie }) => {
  const { _id, title, posterUrl, genre, rating, releaseYear } = movie;

  return (
    <div className="group relative">
      {/* Card */}
      <div className="relative h-[250px] md:h-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500 shadow-2xl flex flex-col">

        {/* Image */}
        <figure className="relative h-[180px] sm:h-56 md:h-64 lg:h-72 overflow-hidden rounded-t-lg">
          <img
            src={posterUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />

          {/* Rating */}
          <div className="absolute bottom-3 right-3 z-10">
            <div className="flex items-center gap-2 bg-black/80 px-3 py-1.5 rounded-lg border border-yellow-500/40">
              <FaStar className="text-yellow-400 text-xs sm:text-sm" />
              <span className="text-white font-bold text-xs sm:text-sm">{rating}</span>
            </div>
          </div>
        </figure>

        {/* Content */}
        <div className="flex flex-col flex-1 justify-between px-3 sm:px-4 py-2 sm:py-3 bg-gradient-to-b from-slate-800/80 to-slate-900/80">
          <div>
            {/* Title one line, responsive text */}
            <h2 className="font-semibold text-sm sm:text-base md:text-lg text-white mb-1 truncate">
              {title}
            </h2>

            {/* Genre & Year */}
            <div className="flex justify-between mb-2 items-center text-xs sm:text-sm md:text-base text-gray-400">
              <div className="flex items-center gap-1.5">
                <Film className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{genre}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{releaseYear}</span>
              </div>
            </div>
          </div>

          {/* Button tiny gap */}
          <Link
            to={`/movieDetails/${_id}`}
            className="relative block mt-[2px] overflow-hidden group/btn"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-0 group-hover/btn:opacity-40 transition-opacity" />

            {/* Button */}
            <div className="relative px-3 sm:px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-lg font-semibold text-white text-center flex items-center justify-center gap-2 text-xs sm:text-sm">
              <span>Details</span>
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 opacity-0 group-hover/btn:opacity-100 transition-opacity" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movies;

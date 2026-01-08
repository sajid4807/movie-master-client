import { Star, Crown, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";

// Helper to format date
const formatDate = (dateString) => {
  if (!dateString) return "Unknown";
  const date = new Date(dateString);
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

const TopRatedMovies = ({ genre = "All" }) => {
  const axiosInstance = useAxios();

  // Fetch top-rated movies using react-query
  const { data: movies = [], isLoading, isError } = useQuery({
    queryKey: ["topRatedMovies", genre],
    queryFn: async () => {
      const res = await axiosInstance.get('/topRatedMovies');
      return res.data;
    },
  });

  const getRankColor = (index) => {
    switch (index) {
      case 0:
        return "from-yellow-500/30 to-amber-500/30 border-yellow-500/40";
      case 1:
        return "from-gray-400/30 to-slate-400/30 border-gray-400/40";
      case 2:
        return "from-amber-600/30 to-orange-600/30 border-amber-600/40";
      default:
        return "from-cyan-500/30 to-blue-500/30 border-cyan-500/40";
    }
  };

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <div className="text-center py-10 text-red-500">
        Failed to load top-rated movies.
      </div>
    );

  return (
    <div className="mb-10 md:mb-20 relative">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-4">
        {movies.map((movie, index) => (
          <div key={movie._id} className="group relative">
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden border border-cyan-500/20 transition-all duration-500 group-hover:scale-[1.02] group-hover:border-cyan-500/40  flex flex-col">
              
              {/* Rating Badge */}
              {movie.rating && (
                <div className="absolute top-3 right-3 z-10">
                  <div className="flex items-center gap-1 px-2.5 py-1.5 bg-black/60 backdrop-blur-md rounded-full border border-yellow-500/40">
                    <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                    <span className="text-xs font-bold text-yellow-100">{movie.rating}</span>
                  </div>
                </div>
              )}

              {/* Movie Image */}
              <div className="relative h-[170px] md:h-[280px] overflow-hidden">
                <img
                  src={movie.posterUrl || "/placeholder.png"}
                  alt={movie.title || "Untitled Movie"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              </div>

              {/* Title & Date */}
              <div className="relative p-3 md:p-4 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm flex-1 flex flex-col justify-between">
                <h2 className="font-bold text-sm md:text-base text-white truncate group-hover:text-cyan-300 transition-colors duration-300">
                  {movie.title || "Untitled Movie"}
                </h2>
                {movie.addedAt && (
                  <div className="flex items-center gap-1 mt-1 text-xs md:text-sm text-gray-400 group-hover:text-cyan-400 transition-colors duration-300">
                    <Calendar className="w-3.5 h-3.5 md:w-4 md:h-4" />
                    <span className="font-medium">{formatDate(movie.addedAt)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;

import { Calendar, Sparkles, Zap } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import Loading from "../Loading/Loading";

const LatestMovies = () => {
  const axiosInstance = useAxios();

  const { data: movies = [], isLoading } = useQuery({
    queryKey: ["latest-movies"],
    queryFn: async () => {
      const res = await axiosInstance.get("/latestMovies");
      return res.data;
    },
  });

  const formatDate = (dateString) => {
    if (!dateString) return "Unknown";
    const date = new Date(dateString);
    const months = [
      "Jan","Feb","Mar","Apr","May","Jun",
      "Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  };

  if (isLoading) return <Loading />;

  if (movies.length === 0)
    return <div className="text-center py-10 text-gray-400">No latest movies</div>;

  return (
    <div className="pb-10 md:pb-20 relative overflow-hidden">
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
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {movies.map((movie) => (
          <div key={movie._id} className="group relative">
            <div className="relative rounded-lg overflow-hidden border border-cyan-500/20 transition-all duration-500 group-hover:border-cyan-500/50 group-hover:shadow-2xl flex flex-col h-full">
              
              {/* Image */}
              <div className="relative h-[170px] md:h-[280px] overflow-hidden">
                <img
                  src={movie.posterUrl || "/placeholder.png"}
                  alt={movie.title || "No title"}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
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

export default LatestMovies;

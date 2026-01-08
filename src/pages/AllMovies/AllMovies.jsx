import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import useAxios from "../../hooks/useAxios";
import LoadingCard from "../../components/Loading/LoadingCard";
import Movies from "../../components/Movies/Movies";
import { Search, Film, Filter, Star, Calendar, Sparkles } from "lucide-react";

const AllMovies = () => {
  const axiosInstance = useAxios();

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [genre, setGenre] = useState("All");
  const [page, setPage] = useState(1);
  const [inputValue, setInputValue] = useState("");
  const limit = 12;

  // 🔥 React Query (AUTO refetch on state change)
  const {
    data = { movies: [], totalPages: 1 },
    isLoading,
  } = useQuery({
    queryKey: ["all-movies", search, sort, genre, page],
    queryFn: async () => {
      const res = await axiosInstance.get("/allMovies", {
        params: { search, sort, genre, page, limit },
      });
      return res.data;
    },
    keepPreviousData: true,
  });

  // 🔍 Search
  const handleSearch = () => {
    setSearch(inputValue);
    setPage(1);
  };

  // 🔃 Filters
  const handleSortChange = (value) => {
    setSort(value);
    setPage(1);
  };

  const handleGenreChange = (value) => {
    setGenre(value);
    setPage(1);
  };

  if (isLoading) return <LoadingCard />;

  return (
    <div className="text-primary body-width py-8 md:py-16 px-4 md:px-0 relative">

      {/* Header Section */}
      <div className="relative text-center">
        <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-full border border-white/10 backdrop-blur-xl">
          <Film className="w-5 h-5 text-cyan-400 animate-pulse" />
          <span className="text-sm font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Explore Our Collection</span>
          <Sparkles className="w-5 h-5 text-purple-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
        </div>
        
      </div>

      {/* Search & Filters Card */}
      <div className="relative mb-12 body-width">
        <div className="relative">

          {/* Search Section */}
          <div className="relative mb-8">
            <div className="flex sm:flex-row gap-2">
              <div className="flex-1 relative">
                <input
                  type="search"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Search by title, location, or description..."
                  className="w-full px-6 py-2 md:py-4 bg-slate-900/50 border-2 border-slate-700 rounded-lg focus:outline-none focus:border-cyan-500 focus:ring-4 focus:ring-cyan-500/20 placeholder-slate-500 text-white transition-all backdrop-blur-sm"
                  onKeyPress={(e) => e.key === "Enter" && handleSearch()}
                />
                <div className="absolute hidden md:block right-4 top-1/2 -translate-y-1/2 text-slate-500">
                  <Search className="w-5 h-5" />
                </div>
              </div>
              
              <button
                onClick={handleSearch}
                className="px-8 py-2 md:py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-400 text-white font-bold rounded-lg shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Search className="w-5 h-5" />
                <span className="hidden sm:inline">Search</span>
              </button>
            </div>
          </div>


          {/* Filters Grid */}
          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Sort Filter */}
            <div>
              <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-slate-300">
                <Calendar className="w-4 h-4 text-blue-400" />
                Sort By
              </label>
              <div className="relative">
                <select
                  value={sort}
                  onChange={(e) => handleSortChange(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-900 border-2 border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer backdrop-blur-sm pr-10"
                >
                  <option value="">Default Order</option>
                  <option value="releaseYear">Latest First</option>
                  <option value="rating">Highest Rated</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Genre Filter */}
            <div>
              <label className="flex items-center gap-2 mb-3 text-sm font-semibold text-slate-300">
                <Star className="w-4 h-4 text-purple-400" />
                Genre
              </label>
              <div className="relative">
                <select
                  value={genre}
                  onChange={(e) => handleGenreChange(e.target.value)}
                  className="w-full px-4 py-3.5 bg-slate-900 border-2 border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-4 focus:ring-blue-500/20 transition-all appearance-none cursor-pointer backdrop-blur-sm pr-10"
                >
                  <option value="All">All Genres</option>
                  <option value="Action">Action</option>
                  <option value="Crime">Crime</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Drama">Drama</option>
                  <option value="Comedy">Comedy</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                  <svg className="w-5 h-5 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 🎬 Movie Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 my-12">
        {data.movies.map((movie) => (
          <Movies key={movie._id} movie={movie} />
        ))}
      </div>

      {/* 📄 Pagination */}
      {data.totalPages > 1 && (
        <div className="relative flex justify-center">
          <div className="inline-flex items-center gap-2 p-2 bg-slate-800/40 backdrop-blur-xl rounded-2xl border border-white/10">
            {Array.from({ length: data.totalPages }).map((_, index) => (
              <button
                key={index}
                onClick={() => setPage(index + 1)}
                className={`min-w-[44px] px-4 py-2.5 rounded-xl font-bold transition-all duration-300 ${
                  page === index + 1
                    ? "bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg shadow-cyan-500/30 scale-110"
                    : "text-slate-400 hover:text-white hover:bg-slate-700/50"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AllMovies;
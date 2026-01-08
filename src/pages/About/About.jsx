import { Film, Eye, BookMarked, Sparkles } from "lucide-react";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="px-4 md:px-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black py-8 md:py-16">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Hero Section */}
        <div className="text-center text-white">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Welcome to Movie Master
          </h1>
          <p className="text-gray-300 text-lg md:text-xl">
            Your ultimate platform to explore, save, and manage movies with
            ease. Discover trending films, maintain your personal watchlist, and
            share your collection.
          </p>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
            <Film className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Explore Movies
            </h3>
            <p className="text-gray-400 text-sm">
              Browse and discover movies with detailed information, ratings, and
              trailers.
            </p>
          </div>
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
            <Eye className="w-10 h-10 text-pink-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Watchlist</h3>
            <p className="text-gray-400 text-sm">
              Save movies you want to watch later and track your viewing
              progress.
            </p>
          </div>
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
            <BookMarked className="w-10 h-10 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              My Collection
            </h3>
            <p className="text-gray-400 text-sm">
              Organize your favorite movies in your personal collection for easy
              access.
            </p>
          </div>
          <div className="bg-slate-800 p-4 md:p-6 rounded-2xl text-center shadow-lg hover:scale-105 transition">
            <Sparkles className="w-10 h-10 text-cyan-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">
              Trending & Highlights
            </h3>
            <p className="text-gray-400 text-sm">
              Stay updated with trending movies, hot releases, and top-rated
              films.
            </p>
          </div>
        </div>

        {/* Mission Section */}
        <div className="bg-slate-800 p-4 md:p-6 rounded-2xl shadow-lg text-center text-white">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            Movie Master aims to provide an intuitive, user-friendly platform
            for movie lovers. We make discovering, saving, and tracking your
            favorite films effortless and enjoyable.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <Link
            to="/allMovies"
            className="bg-cyan-500 hover:bg-cyan-400 text-white px-6 py-3 rounded-full font-semibold transition text-lg inline-block"
          >
            Start Exploring Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;

import { Link } from "react-router";
import { Home, Film, Sparkles, MapPin, Search } from "lucide-react";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-10 px-4 relative overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[400px] h-[400px] hidden md:block bg-purple-700/20 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse-slow" />
        <div className="absolute hidden md:block w-[300px] h-[300px] bg-blue-500/20 rounded-full bottom-[-50px] right-[-50px] blur-3xl animate-pulse-slow-reverse" />
        <div className="absolute hidden md:block w-[350px] h-[350px] bg-cyan-500/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: '#00c6ff'
        }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        
        {/* 404 Number with Effects */}
        <div className="relative mb-8">
          {/* Glow Effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-full bg-gradient-to-r from-red-500/20 via-pink-500/20 to-purple-500/20 blur-3xl rounded-full" />
          </div>
          
          {/* 404 Text */}
          <h1 className="relative text-[180px] md:text-[240px] font-black leading-none">
            <span className="bg-gradient-to-br from-red-500 via-pink-500 to-purple-500 bg-clip-text text-transparent animate-pulse drop-shadow-2xl">
              404
            </span>
          </h1>

          {/* Floating Icons around 404 */}
          <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-12 opacity-50">
            <Film className="w-12 h-12 text-cyan-400 animate-bounce" style={{ animationDelay: '0s' }} />
          </div>
          <div className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-12 opacity-50">
            <Search className="w-12 h-12 text-purple-400 animate-bounce" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-8 opacity-50">
            <MapPin className="w-10 h-10 text-pink-400 animate-bounce" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Error Message Card */}
        <div className="relative mb-8">
          {/* Card Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30" />
          
          {/* Card Content */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-10 border border-cyan-500/20 backdrop-blur-sm shadow-2xl">
            
            {/* Title */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-cyan-400 animate-pulse" />
              <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Oops! Page Not Found
              </h2>
              <Sparkles className="w-6 h-6 text-purple-400 animate-pulse delay-300" />
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-cyan-500 to-transparent rounded-full" />
              <Film className="w-5 h-5 text-cyan-400" />
              <div className="h-1 w-20 bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full" />
            </div>

            {/* Description */}
            <p className="text-gray-300 text-base md:text-lg text-center mb-8 max-w-lg mx-auto leading-relaxed">
              The page you are looking for might have been removed, changed, or is
              temporarily unavailable.
            </p>

            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blue-500/20" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/20" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-pink-500/20" />
          </div>
        </div>

        {/* Illustration Image */}
        <div className="relative mb-10">
          {/* Image Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50" />
          
          {/* Image Container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-4 md:p-6 border border-cyan-500/20 shadow-2xl overflow-hidden group w-80 md:w-96 mx-auto">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="Movie Illustration"
              className="w-full h-full rounded-2xl shadow-2xl animate-float transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            
            {/* Corner Accents */}
            <div className="absolute top-2 left-2 w-8 h-8 border-t-2 border-l-2 border-cyan-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-purple-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Home Button */}
        <Link to="/" className="relative inline-flex group overflow-hidden">
          {/* Button Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          
          {/* Button Content */}
          <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 flex items-center gap-3 shadow-xl">
            <Home className="w-5 h-5" />
            <span>Go Back Home</span>
            <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            {/* Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
          </div>
        </Link>

        {/* Help Text */}
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <p>Lost? We'll help you find your way back</p>
        </div>
      </div>

      {/* Custom CSS for Animations */}
      <style>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        @keyframes pulse-slow-reverse {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1.1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        .animate-pulse-slow-reverse {
          animation: pulse-slow-reverse 5s ease-in-out infinite;
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default ErrorPage;
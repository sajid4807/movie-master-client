import { Link } from "react-router";
import { AlertCircle, Home, Film, Sparkles } from "lucide-react";

const ErrorId = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black p-6 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute hidden md:block w-[400px] h-[400px] bg-purple-700/20 rounded-full top-[-50px] left-[-50px] blur-3xl animate-pulse-slow" />
        <div className="absolute hidden md:block w-[300px] h-[300px] bg-blue-500/20 rounded-full bottom-[-50px] right-[-50px] blur-3xl animate-pulse-slow-reverse" />
        <div className="absolute hidden md:block w-[350px] h-[350px] bg-red-500/10 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-3xl animate-pulse" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: '#ef4444'
        }} />
      </div>

      {/* Error Content Container */}
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        
        {/* Error Icon with Glow */}
        <div className="relative inline-flex mb-8">
          {/* Outer Glow Rings */}
          <div className="absolute inset-0 w-32 h-32 bg-red-500/20 rounded-full blur-2xl animate-pulse" />
          <div className="absolute inset-0 w-32 h-32 border-2 border-red-500/30 rounded-full animate-ping" />
          
          {/* Icon Container */}
          <div className="relative p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-3xl border-2 border-red-500/40 backdrop-blur-sm">
            <AlertCircle className="w-16 h-16 text-red-400 animate-bounce" />
          </div>

          {/* Sparkle Effects */}
          <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-red-400 animate-pulse" />
          <Sparkles className="absolute -bottom-2 -left-2 w-5 h-5 text-pink-400 animate-pulse delay-300" />
        </div>

        {/* Error Card */}
        <div className="relative mb-8">
          {/* Card Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-500 via-pink-500 to-purple-500 rounded-3xl blur-xl opacity-30" />
          
          {/* Card Content */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 md:p-12 border border-red-500/20 backdrop-blur-sm shadow-2xl">
            
            {/* 404 Large Text (Optional decorative element) */}
            <div className="absolute top-4 right-4 text-8xl font-black text-red-500/5 pointer-events-none">
              404
            </div>

            {/* Error Title */}
            <h1 className="relative text-4xl md:text-6xl font-black bg-gradient-to-r from-red-400 via-pink-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Details Page Not Found
            </h1>

            {/* Divider Line */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
              <Film className="w-5 h-5 text-red-400" />
              <div className="h-1 w-16 bg-gradient-to-r from-transparent via-red-500 to-transparent rounded-full" />
            </div>

            {/* Error Description */}
            <p className="text-gray-300 text-base md:text-lg text-center mb-8 max-w-md mx-auto leading-relaxed">
              The item you are looking for does not exist, may have been removed, or
              the ID is incorrect.
            </p>

            {/* Action Button */}
            <Link
              to="/allMovies"
              className="relative inline-flex group overflow-hidden"
            >
              {/* Button Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
              
              {/* Button Content */}
              <div className="relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 flex items-center gap-2 shadow-xl">
                <Home className="w-5 h-5" />
                <span>Back All Games</span>
                
                {/* Shine Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
              </div>
            </Link>

            {/* Corner Brackets */}
            <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-red-500/20" />
            <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-pink-500/20" />
            <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/20" />
            <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-red-500/20" />
          </div>
        </div>

        {/* Illustration Image */}
        <div className="relative">
          {/* Image Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-50" />
          
          {/* Image Container */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-4 border border-red-500/20 shadow-2xl overflow-hidden group">
            <img
              src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
              alt="Item Not Found Illustration"
              className="w-72 md:w-96 mx-auto rounded-2xl animate-float transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Shimmer Effect on Image */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          </div>
        </div>

        {/* Additional Help Text */}
        <div className="mt-8 flex items-center justify-center gap-2 text-gray-500 text-sm">
          <Sparkles className="w-4 h-4 text-red-400" />
          <p>Need help? Contact our support team</p>
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

export default ErrorId;
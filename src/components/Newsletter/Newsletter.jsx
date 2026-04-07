import { Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="pb-10 md:pb-20">
      <div className="px-6 py-12 bg-gradient-to-r from-slate-900/50 via-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl border border-cyan-500/20 relative">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Text Section */}
          <div className="flex items-center gap-4 md:gap-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
              <Mail className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-white font-bold text-xl md:text-2xl">
                Stay Updated
              </h3>
              <p className="text-gray-400 text-sm md:text-base">
                Get the latest movies, anime, and entertainment updates directly
                in your inbox!
              </p>
            </div>
          </div>

          {/* Input Section */}
          <div className="px-4 flex gap-1 md:w-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 w-52 md:w-64 p-2 md:px-4 md:py-2 bg-white/5 border border-white/10 rounded-lg text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
            <button className="flex-shrink-0 px-4 md:px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all">
              Subscribe
            </button>
          </div>
        </div>

        {/* Decorative Background Circles */}
        <div className="absolute -top-16 -left-16 w-auto md:w-60 h-60 bg-purple-600/10 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
        <div className="absolute -bottom-16 -right-16 w-auto md:w-60 h-60 bg-blue-600/10 blur-3xl rounded-full animate-pulse pointer-events-none"></div>
      </div>
    </div>
  );
}

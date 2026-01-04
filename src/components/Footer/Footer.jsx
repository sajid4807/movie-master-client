import { Link } from "react-router";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Film, MapPin, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 via-slate-900 to-black border-t border-cyan-500/20 pt-10 md:pt-20 relative overflow-hidden">

      {/* Background Animated Circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-16 -left-20 w-60 h-60 bg-purple-600/20 blur-3xl rounded-full animate-pulse" />
        <div className="absolute -bottom-16 -right-20 w-60 h-60 bg-blue-600/20 blur-3xl rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-cyan-500/10 blur-3xl rounded-full animate-pulse delay-1000" />
      </div>

      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative">

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-12 pb-10">

          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                <Film className="w-6 h-6 text-cyan-400" />
              </div>
              <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Movie Master
              </h2>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Your place for movies, anime & entertainment — smooth UI experience.
            </p>

            <div className="flex gap-3">
              {/* Socials */}
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer hover:scale-110">
                <FaFacebook className="text-gray-300 hover:text-blue-400 text-lg transition-colors" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer hover:scale-110">
                <FaInstagram className="text-gray-300 hover:text-pink-400 text-lg transition-colors" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer hover:scale-110">
                <FaXTwitter className="text-gray-300 hover:text-slate-300 text-lg transition-colors" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="p-2.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all cursor-pointer hover:scale-110">
                <FaYoutube className="text-gray-300 hover:text-red-400 text-lg transition-colors" />
              </a>
            </div>
          </div>

          {/* Explore Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Explore</h3>
            <ul className="space-y-3">
              {["Movies", "Anime", "TV Shows", "Trending"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 text-sm hover:text-cyan-300 transition-colors cursor-pointer">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Support</h3>
            <ul className="space-y-3">
              <li><Link to='help-center' className="text-gray-400 text-sm hover:text-blue-300 transition-colors cursor-pointer">Help Center</Link></li>
              <li><Link to="/contact" className="text-gray-400 text-sm hover:text-blue-300 transition-colors cursor-pointer">Contact Us</Link></li>
              <li><Link to='report-issue' className="text-gray-400 text-sm hover:text-blue-300 transition-colors cursor-pointer">Report Issue</Link></li>
              <li><Link to='faq' className="text-gray-400 text-sm hover:text-blue-300 transition-colors cursor-pointer">FAQ</Link></li>
            </ul>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Platform</h3>
            <ul className="space-y-3">
              <li><Link to='/term' className="text-gray-400 text-sm hover:text-purple-300 transition-colors cursor-pointer">Terms & Conditions</Link></li>
              <li><Link to='/privacy-policy' className="text-gray-400 text-sm hover:text-purple-300 transition-colors cursor-pointer">Privacy Policy</Link></li>
              <li><Link to='community-rules' className="text-gray-400 text-sm hover:text-purple-300 transition-colors cursor-pointer">Community Rules</Link></li>
              <li><Link to="/about" className="text-gray-400 text-sm hover:text-purple-300 transition-colors cursor-pointer">About Us</Link></li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="border-t border-cyan-500/20 relative">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} <span className="text-cyan-400 font-semibold">Movie Master</span> — All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"><MapPin className="w-4 h-4" /> Global</span>
            <span className="flex items-center gap-2 hover:text-cyan-400 transition-colors cursor-pointer"><Phone className="w-4 h-4" /> 24/7 Support</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

    </footer>
  );
}

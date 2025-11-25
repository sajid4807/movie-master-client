import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-base-content border-t border-white/10 pt-10 md:pt-20 relative overflow-hidden">
      {/* Soft glow circles */}
      <div className="absolute -top-16 -left-20 w-60 h-60 bg-purple-600/20 blur-3xl rounded-full"></div>
      <div className="absolute -bottom-16 -right-20 w-60 h-60 bg-blue-600/20 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6  grid grid-cols-1 md:grid-cols-4 gap-10 relative z-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-white">MovieVerse</h2>
          <p className="text-gray-400 mt-3 text-sm leading-relaxed">
            Your place for movies, anime & entertainment — with a smooth,
            eye-soothing UI experience.
          </p>

          <div className="flex gap-3 mt-4">
            {[FaFacebook, FaInstagram,  FaXTwitter , FaYoutube].map((Icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-all cursor-pointer hover:scale-110"
              >
                <Icon className="text-gray-300 hover:text-white text-lg" />
              </div>
            ))}
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Explore</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Movies</li>
            <li className="hover:text-white transition">Anime</li>
            <li className="hover:text-white transition">TV Shows</li>
            <li className="hover:text-white transition">Trending</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Help Center</li>
            <li className="hover:text-white transition">Contact Us</li>
            <li className="hover:text-white transition">Report Issue</li>
            <li className="hover:text-white transition">FAQ</li>
          </ul>
        </div>

        <div>
          <h3 className="text-white font-semibold text-lg mb-3">Platform</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="hover:text-white transition">Terms & Conditions</li>
            <li className="hover:text-white transition">Privacy Policy</li>
            <li className="hover:text-white transition">Community Rules</li>
            <li className="hover:text-white transition">About Us</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 mt-10 py-5 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} MovieVerse — All Rights Reserved.
      </div>
    </footer>
  );
}

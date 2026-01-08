import { Link, NavLink, useLocation, useNavigate } from "react-router";
import MyLink from "../MyLink/MyLink";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaGear } from "react-icons/fa6";
import { MdOutlineLogout, MdOutlinePlaylistPlay } from "react-icons/md";
import { Film, Menu, X, Sparkles, LayoutDashboard } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOutUser } = useAuth();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  const link = (
    <>
      {/* Public routes (always visible) */}
      <li onClick={() => setIsMobileMenuOpen(false)}>
        <MyLink to="/">Home</MyLink>
      </li>

      <li onClick={() => setIsMobileMenuOpen(false)}>
        <MyLink to="/allMovies">All Movies</MyLink>
      </li>
      <li onClick={() => setIsMobileMenuOpen(false)}>
        <MyLink to="/about">About US</MyLink>
      </li>
      <li onClick={() => setIsMobileMenuOpen(false)}>
        <MyLink to="/contact">Contact</MyLink>
      </li>

      {/* Private routes (only logged-in users) */}
    </>
  );

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser().then(() => {
          navigate("/");
          Swal.fire("Logged out!", "You have been logged out.", "success");
        });
      }
    });
  };

  return (
    <div
      className={`sticky top-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-slate-900/95 backdrop-blur-xl shadow-2xl shadow-cyan-500/10"
          : "bg-slate-900/90 backdrop-blur-md"
      }`}
    >
      {/* Top Accent Line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />

      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
            backgroundSize: "32px 32px",
            color: "#00c6ff",
          }}
        />
      </div>

      <div className="relative navbar px-4 md:px-20 py-4">
        {/* Navbar Start - Logo & Mobile Menu */}
        <div className="navbar-start">
          {/* Mobile Menu Button */}
          <div className="dropdown lg:hidden" ref={mobileMenuRef}>
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative p-2 rounded-xl hover:bg-slate-800/50 text-white transition-all duration-300 border border-cyan-500/20 hover:border-cyan-500/40 group"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 rounded-xl transition-all duration-300" />
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 relative z-10" />
              ) : (
                <Menu className="w-5 h-5 relative z-10" />
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <ul className="menu menu-sm dropdown-content bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl z-[999] mt-3 w-64 p-3 shadow-2xl border border-cyan-500/20 backdrop-blur-xl">
                {link}
              </ul>
            )}
          </div>

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 ml-2 group relative">
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            {/* Icon Container */}
            <div className="relative hidden md:block p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
              <Film className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
            </div>

            {/* Text Logo */}
            <span className="relative text-lg lg:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
              Movie Master
            </span>

            {/* Sparkle Effect */}
            <Sparkles className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-1 -right-1" />
          </Link>
        </div>

        {/* Navbar Center - Desktop Links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-2">{link}</ul>
        </div>

        {/* Navbar End - User Section */}
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 md:gap-5 items-center z-10">
              {/* User Profile Dropdown */}
              <div className="flex items-center">
                <div className="dropdown dropdown-end">
                  <button
                    type="button"
                    className="relative group"
                    aria-label="User menu"
                  >
                    {/* Avatar Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300" />

                    {/* Avatar Ring */}
                    <div className="relative p-0.5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full group-hover:scale-110 transition-transform duration-300">
                      <div className="p-0.5 bg-slate-900 rounded-full">
                        <img
                          referrerPolicy="no-referrer"
                          src={`${user ? user?.photoURL : ""}`}
                          alt="User Avatar"
                          className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover cursor-pointer"
                        />
                      </div>
                    </div>

                    {/* Online Indicator */}
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-slate-900 rounded-full animate-pulse" />
                  </button>

                  {/* Profile Dropdown Menu */}
                  <ul className="menu menu-sm dropdown-content bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 w-52 md:w-60 rounded-2xl z-[99] mt-3 p-3 shadow-2xl border border-cyan-500/20 backdrop-blur-xl right-0">
                    <li>
                      <p className="font-bold text-xl text-white uppercase">
                        {user?.displayName || "User"}
                      </p>
                    </li>

                    <li>
                      <NavLink
                        to="/dashboard/dashboard-home"
                        className={({ isActive }) =>
                          `smooth-border-underline flex items-center gap-2 transition-colors
                           ${
                             isActive
                               ? "bg-slate-700/50 text-cyan-400"
                               : "hover:bg-slate-700/50"
                           }`
                        }
                      >
                        <LayoutDashboard size={20} />
                        <span>Dashboard</span>
                      </NavLink>
                    </li>

                    <li>
                      <button
                        type="button"
                        onClick={handleLogout}
                        className="smooth-border-underline flex items-center gap-2 hover:bg-red-500/10 hover:text-red-400 transition-colors"
                      >
                        <MdOutlineLogout />
                        <span>Log out</span>
                      </button>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Desktop Logout Button */}
              <button
                type="button"
                onClick={handleLogout}
                className="hidden md:block px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 md:gap-5">
              {/* Register Button */}
              <Link to="/register" className="relative group overflow-hidden">
                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Button Content */}
                <div className="relative px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-xl font-semibold text-white text-sm md:text-base group-hover:border-purple-400 transition-all duration-300 backdrop-blur-sm">
                  <span className="relative z-10">Register</span>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              </Link>

              {/* Login Button */}
              <Link to="/login" className="relative group overflow-hidden">
                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />

                {/* Button Content */}
                <div className="relative px-4 md:px-6 py-2 md:py-2.5 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-xl font-semibold text-white text-sm md:text-base group-hover:border-cyan-400 transition-all duration-300 backdrop-blur-sm">
                  <span className="relative z-10">Login</span>

                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              </Link>
            </div>
          )}
        </div>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
    </div>
  );
};

export default Navbar;

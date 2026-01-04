import { Film, Sparkles, Home, User, BookMarked, Upload, Eye, LogOut } from "lucide-react";
import { MdOutlineLogout } from "react-icons/md";
import { Link, NavLink, Outlet, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { signOutUser } = useAuth();

  const handleLogout = () => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout it!",
    }).then((result) => {
      if (result.isConfirmed) {
        signOutUser();
        Swal.fire({
          title: "Logout!",
          text: "Are you sure for logout.",
          icon: "success",
        });
      }
    });
    navigate(`${location.state ? location.state : "/"}`);
  };

  return (
    <div className="relative">
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
        
        <div className="drawer-content">
          {/* Enhanced Navbar */}
          <nav className="navbar w-full bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border-b border-cyan-500/20 relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
                backgroundSize: '24px 24px',
                color: '#00c6ff'
              }} />
            </div>

            {/* Toggle Button */}
            <label
              htmlFor="my-drawer-4"
              aria-label="open sidebar"
              className="relative btn btn-square btn-ghost group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/20 group-hover:to-blue-500/20 rounded-lg transition-all duration-300" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="my-1.5 inline-block size-4 relative z-10 text-cyan-400"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>

            {/* Logo */}
            <Link 
              to="/dashboard/dashboard-home" 
              className="flex items-center gap-2 ml-2 group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-cyan-600/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30 group-hover:border-cyan-400/50 transition-all duration-300">
                <Film className="w-5 h-5 md:w-6 md:h-6 text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              </div>

              <span className="relative text-lg lg:text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                Movie Master
              </span>

              <Sparkles className="w-4 h-4 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -top-1 -right-1" />
            </Link>
          </nav>

          {/* Main Content Area */}
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-black min-h-screen relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/3 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/3 rounded-full blur-3xl animate-pulse delay-700" />
            </div>

            <Outlet />
          </div>
        </div>

        {/* Enhanced Sidebar */}
        <div className="drawer-side is-drawer-close:overflow-visible z-50">
          <label
            htmlFor="my-drawer-4"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          
          <div className="flex min-h-full flex-col items-start bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 is-drawer-close:w-14 is-drawer-open:w-64 border-r border-cyan-500/20 relative overflow-hidden">
            {/* Sidebar Background Pattern */}
            <div className="absolute inset-0 opacity-5 pointer-events-none">
              <div className="absolute inset-0" style={{
                backgroundImage: 'linear-gradient(180deg, currentColor 1px, transparent 1px)',
                backgroundSize: '100% 50px',
                color: '#00c6ff'
              }} />
            </div>

            {/* Sidebar Glow Effect */}
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-500 opacity-50" />

            {/* Sidebar Menu */}
            <ul className="menu w-full grow relative z-10 pt-4 space-y-2">
              
              {/* Homepage */}
              <li>
                <NavLink
                  className={({ isActive }) => 
                    `tooltip tooltip-right group relative overflow-hidden ${
                      isActive ? 'bg-cyan-500/20 border-l-4 border-cyan-500' : ''
                    }`
                  }
                  data-tip="Homepage"
                  to='/'
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/10 group-hover:to-blue-500/10 transition-all duration-300" />
                  <Home className="w-5 h-5 text-cyan-400 relative z-10" />
                  <span className="is-drawer-close:hidden text-white relative z-10 font-semibold">Homepage</span>
                </NavLink>
              </li>

              {/* Profile */}
              <li>
                <NavLink
                  className={({ isActive }) => 
                    `tooltip tooltip-right group relative overflow-hidden ${
                      isActive ? 'bg-blue-500/20 border-l-4 border-blue-500' : ''
                    }`
                  }
                  data-tip="Profile"
                  to="/dashboard/profile"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300" />
                  <User className="w-5 h-5 text-blue-400 relative z-10" />
                  <span className="is-drawer-close:hidden text-white relative z-10 font-semibold">Profile</span>
                </NavLink>
              </li>

              {/* My Collection */}
              <li>
                <NavLink
                  className={({ isActive }) => 
                    `tooltip tooltip-right group relative overflow-hidden ${
                      isActive ? 'bg-purple-500/20 border-l-4 border-purple-500' : ''
                    }`
                  }
                  data-tip="My Collection"
                  to="/dashboard/myCollection"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-pink-500/0 group-hover:from-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                  <BookMarked className="w-5 h-5 text-purple-400 relative z-10" />
                  <span className="is-drawer-close:hidden text-white relative z-10 font-semibold">My Collection</span>
                </NavLink>
              </li>

              {/* Add Movie */}
              <li>
                <NavLink
                  className={({ isActive }) => 
                    `tooltip tooltip-right group relative overflow-hidden ${
                      isActive ? 'bg-green-500/20 border-l-4 border-green-500' : ''
                    }`
                  }
                  data-tip="Add Movie"
                  to="/dashboard/upload"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/0 to-teal-500/0 group-hover:from-green-500/10 group-hover:to-teal-500/10 transition-all duration-300" />
                  <Upload className="w-5 h-5 text-green-400 relative z-10" />
                  <span className="is-drawer-close:hidden text-white relative z-10 font-semibold">Add Movie</span>
                </NavLink>
              </li>

              {/* My Watch List */}
              <li>
                <NavLink
                  className={({ isActive }) => 
                    `tooltip tooltip-right group relative overflow-hidden ${
                      isActive ? 'bg-pink-500/20 border-l-4 border-pink-500' : ''
                    }`
                  }
                  data-tip="My Watch List"
                  to="/dashboard/my-watch-list"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-500/0 to-rose-500/0 group-hover:from-pink-500/10 group-hover:to-rose-500/10 transition-all duration-300" />
                  <Eye className="w-5 h-5 text-pink-400 relative z-10" />
                  <span className="is-drawer-close:hidden text-white relative z-10 font-semibold">My Watch List</span>
                </NavLink>
              </li>

              {/* Spacer */}
              <li className="flex-grow"></li>

              {/* Logout Button */}
              <li className="mt-auto">
                <button
                  onClick={handleLogout}
                  className="group relative overflow-hidden hover:bg-red-500/10 hover:text-red-400 transition-colors"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 to-pink-500/0 group-hover:from-red-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
                  <LogOut className="w-5 h-5 text-red-400 relative z-10" />
                  <span className="is-drawer-close:hidden text-white relative z-10 font-semibold">Log out</span>
                </button>
              </li>
            </ul>

            {/* Bottom Accent */}
            <div className="w-full h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
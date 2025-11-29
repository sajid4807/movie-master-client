import { Link, useLocation, useNavigate } from "react-router";
import MyLink from "../MyLink/MyLink";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { FaGear } from "react-icons/fa6";
import { MdOutlineLogout } from "react-icons/md";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, signOutUser } = useAuth();
  const link = (
    <>
      <li>
        <MyLink to="/">Home</MyLink>
      </li>
      <li>
        <MyLink to="/allMovies">All Movies</MyLink>
      </li>
      {user ? (
        <li>
          <MyLink to="/myCollection">My Collection</MyLink>
        </li>
      ) : (
        ""
      )}
      <li>
        <MyLink to="/upload">Upload Movie</MyLink>
      </li>
    </>
  );
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
    <div>
      <div className="navbar bg-[#2c3440] px-4 md:px-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="hover:p-3 rounded-full hover:bg-gray-600 text-white md:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#2c3440] rounded-box z-999 mt-3 w-52 p-2 shadow"
            >
              {link}
            </ul>
          </div>
          <Link to="/" className="text-lg ml-1 lg:text-2xl font-bold bg-[linear-gradient(135deg,#6a00f4,#00c6ff)] bg-clip-text text-transparent">
            Movie Master
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{link}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <div className="flex gap-2 md:gap-5 items-center z-10">
              <div className="flex items-center">
                <div className="dropdown">
                  <div tabIndex={0} role="button" className="">
                    <img
                      referrerPolicy="no-referrer"
                      src={`${user ? user?.photoURL : ""}`}
                      alt=""
                      className="w-12 h-12 rounded-full cursor-pointer"
                    />
                  </div>
                  <ul
                    tabIndex="-1"
                    className="menu menu-sm dropdown-content bg-[#2c3440] w-44 md:w-52 rounded-box z-99 mt-3  p-2 shadow right-0"
                  >
                    <li>
                      <MyLink to="/my-watch-list"> My Watch List</MyLink>
                    </li>
                    <li>
                      <button className="smooth-border-underline flex items-center gap-2">
                        <span>
                          <FaGear />
                        </span>{" "}
                        Setting
                      </button>
                    </li>
                    <li>
                      <button
                        className="smooth-border-underline flex items-center gap-2"
                        onClick={handleLogout}
                      >
                        <MdOutlineLogout /> Log out
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <button onClick={handleLogout} className="btn hidden md:block btn-glow">
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-5">
              <Link to="/register" className="btn btn-glow">
                Register
              </Link>
              <Link to="/login" className="btn btn-glow">
                Login
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

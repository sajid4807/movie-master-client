import { Link, NavLink, useLocation, useNavigate } from "react-router";
import MyLink from "../MyLink/MyLink";
import useAuth from "../../hooks/useAuth";

const Navbar = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const{user,signOutUser} = useAuth()
    const link = <>
         <li><MyLink to='/allMovies'>All Movies</MyLink></li>
         <li><MyLink to='/myCollection'>My Collection</MyLink></li>
         {/* <li><MyLink to='/register'>Register</MyLink></li> */}
    </>


  const handleLogout = () =>{
    signOutUser()
    navigate(`${location.state ? location.state : '/'}`)
    // .then(res => {
    //   )
    // })
  }


  return (
    <div>
      <div className="navbar bg-[#2c3440] px-4 md:px-24 ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
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
              className="menu menu-sm dropdown-content bg-[#2c3440] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              
              {link}
             
            </ul>
          </div>
          <Link to='/' className="text-xl text-white lg:text-2xl font-bold">Movie Master</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            
            {link}
            
          </ul>
        </div>
        <div className="navbar-end">
         {user ?  (
          <div className="flex gap-5 items-center">
            <div className="flex items-center">



            <div className="dropdown">
            <div tabIndex={0} role="button" className="">
                            <img src={`${user ? user?.photoURL : ''}`} alt="" className="w-12 h-12 rounded-full"/>

            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-[#2c3440] rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              
              {link}
             
            </ul>
          </div>





              {/* <Link>
              <img src={`${user ? user?.photoURL : ''}`} alt="" className="w-12 h-12 rounded-full"/>
              </Link> */}
            </div>
            <button onClick={handleLogout} className="btn-glow">
              Logout
              </button>              
         </div>) : (
          <div className="space-x-5">
            <Link to='/register' className="btn-glow">Register</Link>
            <Link to='/login' className="btn-glow">Login</Link>
          </div>
         ) }
        </div>
      </div>
    </div>
  );
};

export default Navbar;

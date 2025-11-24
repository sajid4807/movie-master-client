import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen p-6 relative overflow-hidden"
      style={{ backgroundColor: '#14181c' }}
    >
      {/* Animated Background Light / Glow */}
      <div className="absolute w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full top-[-50px] left-[-50px] animate-pulse-slow"></div>
      <div className="absolute w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full bottom-[-50px] right-[-50px] animate-pulse-slow-reverse"></div>

      {/* 404 Text */}
      <h1 className="text-9xl font-extrabold text-red-500 mb-4 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        The page you are looking for might have been removed, changed, or is temporarily unavailable.
      </p>

      {/* Animated Movie Image */}
      <div className="relative w-80 md:w-96 mb-8">
        <img
        // image improve need further and image save file need
          // src="https://plus.unsplash.com/premium_photo-1710409625244-e9ed7e98f67b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Movie Illustration"
          className="w-full h-full rounded-lg shadow-2xl animate-float"
        />
      </div>
      {/* Go Back Home Button */}
      <Link
        to="/"
        className="btn-glow"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

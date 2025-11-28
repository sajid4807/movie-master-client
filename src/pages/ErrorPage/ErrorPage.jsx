import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10 relative overflow-hidden bg-base-content">
      <div></div>
      {/* Animated Background Light / Glow */}
      <div className="absolute w-[400px] h-[400px] hidden md:block bg-purple-700 opacity-20 rounded-full top-[-50px] left-[-50px] animate-pulse-slow"></div>
      <div className="absolute hidden md:block w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full bottom-[-50px] right-[-50px] animate-pulse-slow-reverse"></div>
      <h1 className="text-9xl font-extrabold text-red-500 mb-4 animate-pulse">
        404
      </h1>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
        Oops! Page Not Found
      </h2>
      <p className="text-gray-400 text-center mb-8 max-w-md">
        The page you are looking for might have been removed, changed, or is
        temporarily unavailable.
      </p>

      <div className="relative w-80 md:w-96 mb-8">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Movie Illustration"
          className="w-full h-full rounded-lg shadow-2xl animate-float"
        />
      </div>
      <Link to="/" className="btn btn-glow ">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;

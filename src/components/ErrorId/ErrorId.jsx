import { Link } from "react-router";
const ErrorId = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-base-content p-6 relative overflow-hidden">
        {/* Animated Background Light / Glow */}
      <div className="absolute hidden md:block w-[400px] h-[400px] bg-purple-700 opacity-20 rounded-full top-[-50px] left-[-50px] animate-pulse-slow"></div>
      <div className="absolute hidden md:block w-[300px] h-[300px] bg-blue-500 opacity-20 rounded-full bottom-[-50px] right-[-50px] animate-pulse-slow-reverse"></div>
      <div className="text-red-500 mb-6">
        <svg
          className="w-24 h-24 animate-bounce"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
          />
        </svg>
      </div>
      <h1 className="text-5xl md:text-6xl font-extrabold text-secondary mb-4">
        Details Page Not Found
      </h1>
      <p className="text-primary text-center mb-6 max-w-md">
        The item you are looking for does not exist, may have been removed, or
        the ID is incorrect.
      </p>
      <Link
        to="/game"
        className="btn btn-glow"
      >
        Back All Games
      </Link>
      <div className="mt-10">
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt="Item Not Found Illustration"
          className="w-72 md:w-96 animate-float rounded-2xl"
        />
      </div>
    </div>
  );
};

export default ErrorId;

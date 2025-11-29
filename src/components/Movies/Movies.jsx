import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Movies = ({ movie }) => {
  const { _id, title, posterUrl, genre, rating, releaseYear } = movie;
  return (
    <div>
      <div className="card glow-pulse h-[300px]">
        <figure className="relative">
          <img src={posterUrl} className="h-48 md:h-60" alt="movies" />
          <p className="absolute text-secondary flex items-center gap-x-2 bg-[#141414] px-2 bottom-0 rounded-tl-xl right-0">
            <FaStar className="text-yellow-400" /> {rating}
          </p>
        </figure>
        <div className="px-2">
          {/* <h2 className="pt-2 font-light md:font-medium text-secondary hover:text-[#00c6ff]">
            {title}
          </h2> */}
          <h2 className="pt-2 font-light md:font-medium text-secondary hover:text-[#00c6ff] truncate md:whitespace-normal md:truncate-none"
          >
            {title}
          </h2>

          <div className="flex justify-between">
            <p>{genre}</p>
            <p>{releaseYear}</p>
          </div>
          <div className="flex justify-between mt-2 mb-3">
            <Link to={`/movieDetails/${_id}`} className="btn btn-glow w-full">
              Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

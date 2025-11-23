import { FaStar } from "react-icons/fa";
import { Link } from "react-router";

const Movies = ({ movie }) => {
  const { _id,title,posterUrl,genre,rating,releaseYear,addedAt } = movie;
  return (
    <div>
      <div className="card">
        <figure className="relative">
          <img
            src={posterUrl}
            className="h-48 md:h-60"
            alt="movies"
          />
          <p className="absolute text-secondary flex items-center gap-x-2 bg-[#141414] px-2 bottom-0 rounded-tl-xl right-0"><FaStar className="text-yellow-400" /> {rating}</p>
        </figure>
        <div className="px-2">
          <h2 className="pt-2 font-medium text-secondary hover:text-[#00c6ff]">{title} | <span className="font-normal text-primary">{releaseYear}</span> </h2>
          <div className="flex justify-between">
            <p>Genre: {genre}</p>
          <p>Release: {releaseYear}</p>
          </div>
            
          <div className="flex justify-between mt-2">
            <Link to='' className="btn btn-glow">Watch List</Link>
            <Link to={`/movieDetails/${_id}`} className="btn btn-glow">Details</Link>
                    {/* <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link> */}

          </div>
        </div>
      </div>
    </div>
  );
};

export default Movies;

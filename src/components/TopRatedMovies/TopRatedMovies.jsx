import { use } from "react";

const TopRatedMovies = ({ totalMovies }) => {
  const allMovies = use(totalMovies);
  const movies = allMovies.sort((a, b) => b.rating - a.rating).slice(0, 5);
//   console.log(movies);
  return (
    <div className="mb-10 md:mb-20 text-primary">
        <h3 className="mb-5 text-secondary border-l-4 border-l-[#00c6ff] pl-3 font-bold text-xl">Top Rated Movies</h3>
      <div className="grid grid-row md:grid-cols-5 gap-3">
        {movies.map((movie) => (
          <div key={movie._id} className="card">
              <img src={movie.posterUrl} alt="movie" />
                <h2 className="mt-2">{movie.title}</h2>
                {/* <p>{movie.rating}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopRatedMovies;

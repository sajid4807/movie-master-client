import { use } from "react";

const LatestMovies = ({ totalMovies }) => {


  const formatDate = (dateString) => {
  const date = new Date(dateString);
  const months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};



  const allMovies = use(totalMovies);
  const movies = allMovies.sort((a, b) => new Date(b.addedAt) - new Date(a.addedAt)).slice(0, 6);
  // console.log(movies);
  return (
    <div className="pb-10 md:pb-20 text-primary">
      <h3 className="mb-5 text-secondary border-l-4 border-l-[#00c6ff] pl-3 font-bold text-xl">
        Latest Movies
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {movies.map((movie) => (
          <div key={movie._id} className="card hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
            <img src={movie.posterUrl} className="h-48 md:h-64" alt="movie" />
            <h2 className="mt-2 text-secondary font-medium">{movie.title}</h2>
            <p>{formatDate(movie.addedAt)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestMovies;

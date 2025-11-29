import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";

const MyCollection = () => {
  const axiosSecure = useAxiosSecure();
  const axiosInstance = useAxios()
  const { user } = useAuth();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    axiosSecure
      .get(`/my-collection?email=${user.email}`)
      .then((data) => {
        setMovies(data.data);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          setMovies([]);
        }
      });
  }, [user, axiosSecure]);
  const handleMovieDelete =(id)=> {
     Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!",
        }).then((result) => {
          if (result.isConfirmed) {
            axiosInstance.delete(`/allMovies/${id}`).then(() => {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
              window.location.reload();
            });
          }
        });
  }
  return (
    <div className="text-primary body-width py-10 md:py-16 px-4 md:px-0">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8">
        My Collection
      </h2>
      <div className="grid grid-rows-1 md:grid-cols-4 gap-3 space-y-4">
        {movies && movies.length ? (
          movies.map((movie) => (
            <div key={movie._id} className="card glow-pulse h-[304px]">
              <figure className="relative">
                <img
                  src={movie.posterUrl}
                  className="h-48 md:h-60"
                  alt="movies"
                />
                <p className="absolute text-secondary flex items-center gap-x-2 bg-[#141414] px-2 bottom-0 rounded-tl-xl right-0">
                  <FaStar className="text-yellow-400" /> {movie.rating}
                </p>
              </figure>
              <div className="px-2">
                <h2 className="pt-2 font-medium text-secondary hover:text-[#00c6ff]">
                  {movie.title}
                </h2>
                <div className="flex justify-between">
                  <p>{movie.genre}</p>
                  <p>{movie.releaseYear}</p>
                </div>
              </div>
              <div className="flex items-center gap-4 px-2 py-4">
                <Link to={`/edit/${movie._id}`} state={location.pathname}className="btn btn-glow ">
                Edit
              </Link>
              <button onClick={() =>handleMovieDelete(movie._id)} className="btn btn-glow ">
                Delete
              </button>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <h2 className="text-xl md:text-3xl font-bold text-primary mb-2 animate-bounce">
              No Movies in Your Collection
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCollection;

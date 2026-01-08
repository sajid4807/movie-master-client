import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import { FaStar } from "react-icons/fa6";
import { Link } from "react-router";
// import useAxios from "../../hooks/useAxios";
import Swal from "sweetalert2";
import { Film, Edit, Trash2, Sparkles, BookMarked } from "lucide-react";

const MyCollection = () => {
  const axiosSecure = useAxiosSecure();
  // const axiosInstance = useAxios();
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

const handleMovieDelete = (_id) => {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert movie!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then((result) => {
    if (result.isConfirmed) {
      axiosSecure
        .delete(`/allMovies/${_id}`)
        .then(() => {
          Swal.fire({
            title: "Deleted!",
            text: "Your movie has been deleted.",
            icon: "success"
          });

          window.location.reload();
        })
        .catch(() => {
          Swal.fire({
            icon: "error",
            title: "Forbidden ❌",
            text: "You are not allowed to delete this movie"
          });
        });
    }
  });
};


  return (
    <div className="body-width py-10 md:py-16 px-4 md:px-0 overflow-hidden">
      {/* Page Header */}
      <div className="relative text-center mb-8 md:mb-12">
        <div className="inline-flex items-center justify-center mb-4">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50" />
            <div className="relative p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/40">
              <BookMarked className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
        <h2 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
          My Collection
        </h2>
        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          <p>Manage your favorite movies</p>
        </div>
      </div>

      {/* Movies Grid */}
      <div className="relative grid grid-cols-2 md:grid-cols-6 gap-2">
        {movies && movies.length ? (
          movies.map((movie) => (
            <div key={movie._id} className="group">
              {/* Main Card */}
              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/40 transition-all duration-500 group-hover:scale-[1.02] flex flex-col">
                {/* Image Section */}
                <figure className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                  <img
                    src={movie.posterUrl}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                    alt={movie.title}
                  />

                  {/* Gradient Overlays */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-transparent to-purple-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </div>

                  {/* Rating Badge */}
                  <div className="absolute bottom-3 right-3 z-10">
                    <div className="relative">
                      <div className="absolute inset-0 bg-yellow-500/30 blur-md rounded-lg" />
                      <div className="relative flex items-center gap-1.5 bg-black/80 backdrop-blur-md px-2.5 py-1.5 rounded-lg border border-yellow-500/40">
                        <FaStar className="text-yellow-400 text-sm" />
                        <span className="text-white font-bold text-sm">
                          {movie.rating}
                        </span>
                      </div>
                    </div>
                  </div>
                </figure>

                {/* Content Section */}
                <div className="relative px-3 py-2 bg-gradient-to-b from-slate-800/80 to-slate-900/80 backdrop-blur-sm flex flex-col flex-1 justify-between">
                  {/* Top Content */}
                  <div>
                    {/* Title */}
                    <h2 className="font-semibold text-sm md:text-base text-white group-hover:text-cyan-300 transition-colors duration-300 truncate mb-1">
                      {movie.title}
                    </h2>

                    {/* Genre and Year */}
                    <div className="flex justify-between items-center text-xs text-gray-400 mb-2">
                      <span className="flex items-center gap-1">
                        <Film className="w-3 h-3" />
                        {movie.genre}
                      </span>
                      <span>{movie.releaseYear}</span>
                    </div>
                  </div>

                  {/* Action Buttons (now truly at bottom, no fake space) */}
                  <div className="flex items-center gap-2">
                    {/* Edit Button */}
                    <Link
                      to={`/dashboard/edit/${movie._id}`}
                      state={location.pathname}
                      className="relative flex-1 group/btn overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-md opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                      <div className="relative px-3 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-lg font-semibold text-white text-xs text-center flex items-center justify-center gap-1.5">
                        <Edit className="w-3.5 h-3.5" />
                        <span>Edit</span>
                      </div>
                    </Link>

                    {/* Delete Button */}
                    <button
                      onClick={() => handleMovieDelete(movie._id)}
                      className="relative flex-1 group/btn overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-md opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                      <div className="relative px-3 py-2 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/40 rounded-lg font-semibold text-white text-xs text-center flex items-center justify-center gap-1.5">
                        <Trash2 className="w-3.5 h-3.5" />
                        <span>Delete</span>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Bottom Accent Line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            {/* Empty State */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-2xl opacity-20 animate-pulse" />
              <div className="relative p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl border border-cyan-500/20 shadow-2xl">
                <div className="flex flex-col items-center gap-4">
                  <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/40">
                    <Film className="w-16 h-16 text-cyan-400 animate-bounce" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center">
                    No Movies in Your Collection
                  </h2>
                  <p className="text-gray-400 text-center max-w-md">
                    Start building your collection by adding your favorite
                    movies!
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyCollection;

import { Link, useLocation, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import ErrorId from "../ErrorId/ErrorId";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import { FaStar } from "react-icons/fa";
import { Film, Globe, Languages, Clock, Calendar, User, Users, Sparkles, Edit, Trash2, Eye } from "lucide-react";

const MovieDetails = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const authInfo = useAxios();
  const axiosSecure = useAxiosSecure();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();
  
  const {
    _id,
    title,
    genre,
    country,
    language,
    posterUrl,
    plotSummary,
    duration,
    rating,
    cast,
    director,
    releaseYear,
  } = movie;

  useEffect(() => {
    authInfo
      .get(`/allMovies/${id}`)
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(() => setMovie(null));
  }, [id, axiosSecure, authInfo]);

  if (loading) {
    return <Loading />;
  }
  if (!movie || !movie._id) {
    return <ErrorId />;
  }

  const handleAddWatch = () => {
    const newMovie = {
      ...movie,
      watch_by: user.email,
    };
    authInfo
      .post("/watch-list", newMovie)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "successfully saved movie",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Watch List",
          text: "This movie is already in your watch list.",
        });
      });
  };

  const handleMovieDelete = () => {
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
        axiosSecure.delete(`/allMovies/${_id}`)
          .then(() => {
            Swal.fire({
              title: "Deleted!",
              text: "Your movie has been deleted.",
              icon: "success"
            });
            navigate(location.state ? location.state : "/allMovies");
          })
          .catch(() => {
            Swal.fire({
              icon: "error",
              title: "Forbidden ❌",
              text: 'You are not allowed to delete this movie'
            });
          });
      }
    });
  };

  return (
    <div className="body-width px-4 md:px-8 lg:px-0 py-10 md:py-20 relative overflow-hidden">
      <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        {/* Left Column - Poster & Actions */}
        <div className="lg:col-span-1">
          {/* Poster Card */}
          <div className=" group mb-6 md:mb-8">
            {/* Poster Container */}
            <div className="relative rounded-lg overflow-hidden border border-cyan-500/20 group-hover:border-cyan-500/40 shadow-2xl">
              <img 
                src={posterUrl} 
                alt={title} 
                className="w-full h-auto md:h-[500px] lg:h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" 
              />
              {/* Rating Badge */}
              <div className="absolute top-4 right-4">
                <div className="relative">
                  <div className="absolute inset-0 bg-yellow-500/30 blur-md rounded-lg" />
                  <div className="relative flex items-center gap-2 bg-black/80 px-4 py-2 rounded-lg border border-yellow-500/40">
                    <FaStar className="text-yellow-400 text-lg" />
                    <span className="text-white font-bold text-xl">{rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          {user ? (
            <div className="flex flex-col md:flex-row lg:flex-col gap-3 md:gap-4">
              {/* Edit Button */}
              <Link 
                to={`/dashboard/edit/${_id}`} 
                state={location.pathname} 
                className="relative group/btn overflow-hidden flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/40 rounded-xl font-semibold text-white text-center group-hover/btn:border-cyan-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                  <Edit className="w-5 h-5" />
                  <span>Edit</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </div>
              </Link>

              {/* Delete Button */}
              <button 
                onClick={handleMovieDelete} 
                className="relative group/btn overflow-hidden flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-pink-500 blur-lg opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/40 rounded-xl font-semibold text-white text-center group-hover/btn:border-red-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                  <Trash2 className="w-5 h-5" />
                  <span>Delete</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </div>
              </button>

              {/* Add to Watch List Button */}
              <button 
                onClick={handleAddWatch} 
                className="relative group/btn overflow-hidden flex-1"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 blur-lg opacity-0 group-hover/btn:opacity-50 transition-opacity duration-300" />
                <div className="relative px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/40 rounded-xl font-semibold text-white text-center group-hover/btn:border-purple-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                  <Eye className="w-5 h-5" />
                  <span>Add to Watch list</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700" />
                </div>
              </button>
            </div>
          ) : null}
        </div>

        {/* Middle Column - Story Summary */}
        <div className="lg:col-span-1">
          <div className=" group">
            <div className="opacity-20 group-hover:opacity-40 duration-500" />
            
            <div className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg p-6 md:p-8 border border-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500  h-full">
              {/* Header */}
              <div className="flex items-center gap-3 mb-4 pb-4 border-b border-cyan-500/20">
                <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                  <Sparkles className="w-5 h-5 text-blue-400" />
                </div>
                <h2 className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Story Summary
                </h2>
              </div>

              {/* Content */}
              <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                {plotSummary}
              </p>
            </div>
          </div>
        </div>

        {/* Right Column - Movie Details */}
        <div className="lg:col-span-1">
          <div className=" group">
            <div className=" opacity-20 group-hover:opacity-40" />
            
            <div className=" bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-lg p-6 md:p-8 border border-purple-500/20 group-hover:border-purple-500/40 transition-all duration-500">
              
              {/* Movie Details Items */}
              <div className="space-y-4">
                
                {/* Title */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Film className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm text-gray-400">Story Title</h3>
                  </div>
                  <p className="text-white font-bold text-lg">{title}</p>
                </div>

                {/* Cast */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-4 h-4 text-blue-400" />
                    <h3 className="text-sm text-gray-400">Cast</h3>
                  </div>
                  <p className="text-white font-bold">{cast}</p>
                </div>

                {/* Director */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-4 h-4 text-purple-400" />
                    <h3 className="text-sm text-gray-400">Director</h3>
                  </div>
                  <p className="text-white font-bold">{director}</p>
                </div>

                {/* Genre */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Film className="w-4 h-4 text-pink-400" />
                    <h3 className="text-sm text-gray-400">Genre</h3>
                  </div>
                  <p className="text-white font-bold">{genre}</p>
                </div>

                {/* Country */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-green-400" />
                    <h3 className="text-sm text-gray-400">Country</h3>
                  </div>
                  <p className="text-white font-bold">{country}</p>
                </div>

                {/* Language */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Languages className="w-4 h-4 text-yellow-400" />
                    <h3 className="text-sm text-gray-400">Language</h3>
                  </div>
                  <p className="text-white font-bold">{language}</p>
                </div>

                {/* Duration */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 text-orange-400" />
                    <h3 className="text-sm text-gray-400">Duration</h3>
                  </div>
                  <p className="text-white font-bold">{duration}</p>
                </div>

                {/* Rating */}
                <div className="pb-4 border-b border-cyan-500/20">
                  <div className="flex items-center gap-2 mb-2">
                    <FaStar className="w-4 h-4 text-yellow-400" />
                    <h3 className="text-sm text-gray-400">Rating</h3>
                  </div>
                  <p className="text-white font-bold flex items-center gap-2">
                    <FaStar className="text-yellow-400" /> {rating}
                  </p>
                </div>

                {/* Release Year */}
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <h3 className="text-sm text-gray-400">Release Year</h3>
                  </div>
                  <p className="text-white font-bold">{releaseYear}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
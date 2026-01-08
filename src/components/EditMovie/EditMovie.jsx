import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import { Edit, Film, Calendar, Users, User, Image, Globe, Languages, Clock, Star, FileText, Sparkles, Save } from "lucide-react";

const EditMovie = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;

    axiosSecure.get(`/allMovies/${id}`).then((data) => {
      setMovie(data.data);
      setLoading(false);
    });
  }, [axiosSecure, id, user]);

  if (loading) {
    return <Loading />;
  }

  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const genre = form.genre.value;
    const cast = form.cast.value;
    const director = form.director.value;
    const posterUrl = form.posterUrl.value;
    const country = form.country.value;
    const language = form.language.value;
    const plotSummary = form.plotSummary.value;
    const releaseYear = parseInt(form.releaseYear.value);
    const duration = parseInt(form.duration.value);
    const rating = parseFloat(form.rating.value);
    const newMovie = {
      title,
      genre,
      cast,
      plotSummary,
      director,
      posterUrl,
      country,
      language,
      duration,
      rating,
      releaseYear,
    };

    axiosSecure
      .patch(`/allMovies/${movie._id}`, newMovie)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Edit successful 🎉",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(location.state ? location.state : location.pathname);
      })
      .catch((err) => {
        if (err.response?.status === 403) {
          Swal.fire({
            icon: "error",
            title: "Forbidden",
            text: "You are not allowed to edit this movie",
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Something went wrong",
          });
        }
      });
  };

  return (
    <div className="flex items-center justify-center py-10 md:py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: '#00c6ff'
        }} />
      </div>

      {/* Form Card Container */}
      <div className="relative w-full max-w-2xl">
        {/* Outer Glow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30" />
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-10 border border-cyan-500/20 shadow-2xl backdrop-blur-sm">
          
          {/* Header Section */}
          <div className="text-center mb-8">
            {/* Icon Badge */}
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50" />
                <div className="relative p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/40">
                  <Edit className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Edit Movie
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <p>Update movie information</p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleEdit} className="space-y-5">
            
            {/* Title Input */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Film className="w-4 h-4 text-cyan-400" />
                Title
              </label>
              <input
                type="text"
                name="title"
                defaultValue={movie.title}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Genre & Release Year Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Genre */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Film className="w-4 h-4 text-purple-400" />
                  Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  defaultValue={movie.genre}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>

              {/* Release Year */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-blue-400" />
                  Release Year
                </label>
                <input
                  type="text"
                  name="releaseYear"
                  defaultValue={movie.releaseYear}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Cast Input */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Users className="w-4 h-4 text-pink-400" />
                Cast
              </label>
              <input
                type="text"
                name="cast"
                defaultValue={movie.cast}
                className="w-full px-4 py-3 bg-slate-800/50 border border-pink-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Director Input */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <User className="w-4 h-4 text-orange-400" />
                Director
              </label>
              <input
                type="text"
                name="director"
                defaultValue={movie.director}
                className="w-full px-4 py-3 bg-slate-800/50 border border-orange-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Poster URL Input */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Image className="w-4 h-4 text-green-400" />
                Poster URL
              </label>
              <input
                type="text"
                name="posterUrl"
                defaultValue={movie.posterUrl}
                className="w-full px-4 py-3 bg-slate-800/50 border border-green-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Country & Language Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Country */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Globe className="w-4 h-4 text-teal-400" />
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  defaultValue={movie.country}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>

              {/* Language */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Languages className="w-4 h-4 text-indigo-400" />
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  defaultValue={movie.language}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Duration & Rating Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Duration */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  Duration (minutes)
                </label>
                <input
                  type="text"
                  name="duration"
                  defaultValue={movie.duration}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>

              {/* Rating */}
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Star className="w-4 h-4 text-amber-400" />
                  Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={movie.rating}
                  className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Plot Summary Textarea */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <FileText className="w-4 h-4 text-rose-400" />
                Plot Summary
              </label>
              <textarea
                rows={8}
                name="plotSummary"
                defaultValue={movie.plotSummary}
                className="w-full px-4 py-3 bg-slate-800/50 border border-rose-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm resize-none overflow-y-auto"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button 
                type="submit"
                className="relative w-full group overflow-hidden cursor-pointer"
              >
                {/* Button Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                
                {/* Button Content */}
                <div className="relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                  <Save className="w-5 h-5" />
                  <span>Save Changes</span>
                  <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Shine Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </div>
              </button>
            </div>

          </form>

          {/* Decorative Corner Elements */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blue-500/20" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/20" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-pink-500/20" />
        </div>
      </div>
    </div>
  );
};

export default EditMovie;

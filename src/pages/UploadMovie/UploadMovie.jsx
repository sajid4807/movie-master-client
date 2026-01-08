import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";
import {
  Film,
  Upload,
  Star,
  Calendar,
  Users,
  User,
  Globe,
  Languages,
  Clock,
  FileText,
  Image,
  Sparkles,
} from "lucide-react";

const UploadMovie = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();

  const formatDate = (date) => {
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return new Date(date).toLocaleDateString("en-GB", options);
  };

  const handleUpload = (e) => {
    e.preventDefault(); // prevent page reload

    const form = e.target; // the <form> element

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
    const addedBy = user.email;
    const addedAt = formatDate(new Date());

    const newMovie = {
      title,
      genre,
      cast,
      director,
      posterUrl,
      country,
      language,
      plotSummary,
      releaseYear,
      duration,
      rating,
      addedBy,
      addedAt,
    };

    axiosSecure
      .post(`/allMovies/add`, newMovie)
      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Upload successful 🎉",
          showConfirmButton: false,
          timer: 1500,
        });
        form.reset();
        navigate("/allMovies"); // redirect to all movies
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Upload failed ❌",
          text: error.response?.data?.message || "Something went wrong!",
        });
      });
  };

  return (
    <div className="flex items-center justify-center py-10 md:py-20 px-4 relative overflow-hidden">

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
        <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xs opacity-10" />

        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-10 border border-cyan-500/20 shadow-2xl backdrop-blur-sm">

          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50" />
                <div className="relative p-4 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/40">
                  <Upload className="w-10 h-10 text-cyan-400" />
                </div>
              </div>
            </div>

            <h1 className="text-3xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
              Add Movie
            </h1>
            <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <p>Add a new movie to the collection</p>
            </div>
          </div>

          {/* Fixed Form */}
          <form onSubmit={handleUpload} className="space-y-5">

            {/* Title */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Film className="w-4 h-4 text-cyan-400" /> Title
              </label>
              <input
                type="text"
                name="title"
                placeholder="Enter movie title"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Genre & Release Year */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Film className="w-4 h-4 text-purple-400" /> Genre
                </label>
                <input
                  type="text"
                  name="genre"
                  placeholder="e.g., Action, Drama"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Calendar className="w-4 h-4 text-blue-400" /> Release Year
                </label>
                <input
                  type="text"
                  name="releaseYear"
                  placeholder="e.g., 2024"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Cast */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Users className="w-4 h-4 text-pink-400" /> Cast
              </label>
              <input
                type="text"
                name="cast"
                placeholder="Enter main cast members"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-pink-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Director */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <User className="w-4 h-4 text-orange-400" /> Director
              </label>
              <input
                type="text"
                name="director"
                placeholder="Enter director name"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-orange-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-orange-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Poster URL */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Image className="w-4 h-4 text-green-400" /> Poster URL
              </label>
              <input
                type="text"
                name="posterUrl"
                placeholder="Enter poster image URL"
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-green-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-green-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
              />
            </div>

            {/* Country & Language */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Globe className="w-4 h-4 text-teal-400" /> Country
                </label>
                <input
                  type="text"
                  name="country"
                  placeholder="e.g., USA"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-teal-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-teal-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Languages className="w-4 h-4 text-indigo-400" /> Language
                </label>
                <input
                  type="text"
                  name="language"
                  placeholder="e.g., English"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-indigo-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-indigo-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Duration & Rating */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Clock className="w-4 h-4 text-yellow-400" /> Duration (minutes)
                </label>
                <input
                  type="text"
                  name="duration"
                  placeholder="e.g., 120"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-yellow-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-yellow-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
              <div className="relative">
                <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                  <Star className="w-4 h-4 text-amber-400" /> Rating
                </label>
                <input
                  type="text"
                  name="rating"
                  placeholder="e.g., 8.5"
                  required
                  className="w-full px-4 py-3 bg-slate-800/50 border border-amber-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-amber-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                />
              </div>
            </div>

            {/* Plot Summary */}
            <div className="relative">
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <FileText className="w-4 h-4 text-rose-400" /> Plot Summary
              </label>
              <textarea
                name="plotSummary"
                rows={8}
                placeholder="Write a brief summary of the movie plot..."
                required
                className="w-full px-4 py-3 bg-slate-800/50 border border-rose-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-rose-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm resize-none overflow-y-auto"
              />
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="relative w-full group overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                <div className="relative px-6 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                  <Upload className="w-5 h-5" />
                  <span>Add Movie</span>
                  <Sparkles className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </button>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMovie;

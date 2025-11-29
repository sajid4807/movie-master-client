import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useNavigate } from "react-router";

const UploadMovie = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const navigate = useNavigate();


  const formatDate = (date) => {
  const options = { day: "2-digit", month: "short", year: "numeric" };
  return new Date(date).toLocaleDateString("en-GB", options);
};
  const handleUpload = (e) => {
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
    const addedBy = user.email;
    const addedAt = formatDate(new Date()); 
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
      addedBy,
      addedAt
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
          navigate(location.state ? location.state : "/allMovies");

      })
      .catch((error) => {
        console.error(error);
        Swal.fire({
          icon: "error",
          title: "Upload failed ❌",
          text: error.response?.data?.message || "Something went wrong!",
        });
      });
    e.target.reset();
  };
  return (
    <div className="flex items-center py-10 md:py-20">
      <div className="card bg-base-100 p-5 mx-auto w-[350px] md:w-[450px] shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold mb-2 text-center">Upload Movie</h1>

        <div className="">
          <form onSubmit={handleUpload} className="space-y-4">
            {/* title */}
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                className="input w-full"
                required
              />
            </div>
            {/* tow input */}
            <div className="flex gap-3 md:gap-0 justify-between">
              {/* genre */}
              <div>
                <label className="block text-sm font-medium mb-1">Genre</label>
                <input
                  type="text"
                  name="genre"
                  className="input w-full"
                  required
                />
              </div>
              {/* releaseYear */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  ReleaseYear
                </label>
                <input
                  type="text"
                  name="releaseYear"
                  className="input w-full"
                  required
                />
              </div>
            </div>
            {/* cast */}
            <div>
              <label className="block text-sm font-medium mb-1">Cast</label>
              <input
                type="text"
                name="cast"
                className="input w-full"
                required
              />
            </div>
            {/* director */}
            <div>
              <label className="block text-sm font-medium mb-1">Director</label>
              <input
                type="text"
                name="director"
                className="input w-full"
                required
              />
            </div>
            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                PosterUrl
              </label>
              <input
                type="text"
                name="posterUrl"
                className="input w-full"
                required
              />
            </div>
            {/* tow input */}
            <div className="flex gap-3 md:gap-0 justify-between">
              {/* country */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Country
                </label>
                <input
                  type="text"
                  name="country"
                  className="input w-full"
                  required
                />
              </div>
              {/* language */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Language
                </label>
                <input
                  type="text"
                  name="language"
                  className="input w-full"
                  required
                />
              </div>
            </div>
            {/* tow input */}
            <div className="flex gap-3 md:gap-0pm justify-between">
              {/* duration */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  className="input w-full"
                  required
                />
              </div>
              {/* rating */}
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <input
                  type="text"
                  name="rating"
                  className="input w-full"
                  required
                />
              </div>
            </div>
            {/* plotSummary */}
            <div>
              <label className="block text-sm font-medium mb-1">
                PlotSummary
              </label>
              <textarea
                rows="8"
                cols="20"
                name="plotSummary"
                className="textarea w-full  overflow-y-auto overflow-x-hidden"
                required
              />
            </div>
            <div>
              <button className="btn btn-glow w-full cursor-pointer">
                Upload
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UploadMovie;

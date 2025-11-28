import { useEffect, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";

const Edit = () => {
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
        navigate(
          location.state ? location.state : location.pathname
        );
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
    <div className="flex items-center py-10 md:py-20">
      <div className="card bg-base-100 p-5 mx-auto w-[350px] md:w-[450px] shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold mb-2 text-center">Edit</h1>
        <div className="">
          <form onSubmit={handleEdit} className="space-y-4">
            {/* title */}
            <div>
              <label className="block text-sm font-medium mb-1">Title</label>
              <input
                type="text"
                name="title"
                defaultValue={movie.title}
                className="input w-full"
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
                  defaultValue={movie.genre}
                  className="input w-full"
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
                  defaultValue={movie.releaseYear}
                  className="input w-full"
                />
              </div>
            </div>
            {/* cast */}
            <div>
              <label className="block text-sm font-medium mb-1">Cast</label>
              <input
                type="text"
                name="cast"
                defaultValue={movie.cast}
                className="input w-full"
              />
            </div>
            {/* director */}
            <div>
              <label className="block text-sm font-medium mb-1">Director</label>
              <input
                type="text"
                name="director"
                defaultValue={movie.director}
                className="input w-full"
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
                defaultValue={movie.posterUrl}
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
                  defaultValue={movie.country}
                  className="input w-full"
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
                  defaultValue={movie.language}
                  className="input w-full"
                />
              </div>
            </div>
            {/* tow input */}
            <div className="flex gap-3 md:gap-0 justify-between">
              {/* duration */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Duration
                </label>
                <input
                  type="text"
                  name="duration"
                  defaultValue={movie.duration}
                  className="input w-full"
                />
              </div>
              {/* rating */}
              <div>
                <label className="block text-sm font-medium mb-1">Rating</label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={movie.rating}
                  className="input w-full"
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
                cols="10"
                name="plotSummary"
                defaultValue={movie.plotSummary}
                className="textarea w-full  overflow-y-auto overflow-x-hidden"
              />
            </div>
            <div>
              <button className="btn btn-glow w-full cursor-pointer">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Edit;

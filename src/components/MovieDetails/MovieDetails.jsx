import { Link, useLocation, useNavigate, useParams } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";
import ErrorId from "../ErrorId/ErrorId";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Loading from "../Loading/Loading";
import { FaStar } from "react-icons/fa";

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
    console.log(newMovie);
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


  const handleMovieDelete =()=> {

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
    .catch((error) => {
            console.error(error);
            Swal.fire({
              icon: "error",
              title: "Forbidden ❌",
              text: 'You are not allowed to delete this movie'
            });
          });
  }
  
});


  }
// const handleMovieDelete = () => {




//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       axiosSecure
// .delete(`/allMovies/${_id}`)
//         .then((res) => {
//           if (!res.data.success) {
//             return Swal.fire({
//               title: "Not Deleted!",
//               text: "You cannot delete this movie.",
//               icon: "error",
//             });
//           }
//           // Swal.fire({
//           //   title: "Deleted!",
//           //   text: "Your movie has been deleted.",
//           //   icon: "success",
//           // });

//         )
//         .catch((err) => {
//           Swal.fire({
//             title: "Forbidden!",
//             text:'You are not allowed to delete this movie',
//             icon: "error",
//           });
//           console.error("Delete error:", err);
//         });
//     }
//   });
// };


  return (
    <div className="body-width px-4 md:px-0 py-$10 md:py-20 text-secondary">
      <div className="grid gird-row md:grid-cols-3 gap-8">
        <div>
          <img src={posterUrl} alt="movie details" className="w-full md:h-72" />
          {user ? (
            <div className="flex gap-9 mt-5 md:mt-10">
              <Link to={`/edit/${_id}`} state={location.pathname} className="btn btn-glow">
                Edit
              </Link>
              <button onClick={handleMovieDelete} className="btn btn-glow">
                Delete
              </button>
              <button onClick={handleAddWatch} className="btn btn-glow">
                Add to Watch list
              </button>
            </div>
          ) : null}
        </div>
        <div>
          <h2 className="text-secondary font-medium text-xl mb-1 border-b pb-2">
            Story Summary
          </h2>
          <p className="text-primary">{plotSummary}</p>
        </div>
        <div>
          <div className=" mb-3">
            <h2 className="text-secondary">Story Title</h2>
            <p className="text-primary font-bold">{title}</p>
          </div>
          <div className="border-t border-white/20 pt-1 mb-3">
            <h2 className="text-secondary">Cast</h2>
            <p className="text-primary font-bold">{cast}</p>
          </div>
          <div className="border-t border-white/20 pt-1 mb-3">
            <h2 className="text-secondary">Director</h2>
            <p className="text-primary font-bold">{director}</p>
          </div>
          <div className="border-t border-white/20 pb-1 mb-2">
            <h2 className="text-secondary">Genre</h2>
            <p className="text-primary font-bold">{genre}</p>
          </div>
          <div className="border-t border-white/20 pb-1 mb-2">
            <h2 className="text-secondary">Country</h2>
            <p className="text-primary font-bold">{country}</p>
          </div>
          <div className="border-t border-white/20 pb-1 mb-2">
            <h2 className="text-secondary">Language</h2>
            <p className="text-primary font-bold">{language}</p>
          </div>
          <div className="border-t border-white/20 pb-1 mb-2">
            <h2 className="text-secondary">Duration</h2>
            <p className="text-primary font-bold">{duration}</p>
          </div>
          <div className="border-t border-white/20 pb-1 mb-2">
            <h2 className="text-secondary">Rating</h2>
            <p className="text-primary font-bold flex items-center gap-1">
              <FaStar className="text-yellow-400" /> {rating}
            </p>
          </div>
          <div className="border-t border-white/20 pb-1">
            <h2 className="text-secondary">Release Year</h2>
            <p className="text-primary font-bold">{releaseYear}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

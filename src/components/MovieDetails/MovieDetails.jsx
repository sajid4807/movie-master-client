import { Link, useLoaderData, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import useAxios from "../../hooks/useAxios";

const MovieDetails = () => {
    const movie = useLoaderData()
    const {user} =useAuth()
    const authInfo =useAxios()
    const navigate = useNavigate()
    const location = useLocation()
     const {_id,title,genre,addedAt,addedBy,country,language,posterUrl,plotSummary,duration,rating,cast,director,releaseYear,} =movie

    const handleMovieDelete = () => {
        Swal.fire({
  title: "Are you sure?",
  text: "You won't be able to revert this!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  confirmButtonText: "Yes, delete it!"
}).then((result) => {
  if (result.isConfirmed) {
    authInfo.delete(`/allMovies/${_id}`)
    .then(data => {
        Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
    navigate(`${location.state? location.state: '/allMovies'}`)
    console.log(data)
    })
  }
});
    }


   
    return (
        <div className="body-width px-4 md:px-0 py-10 md:py-20 text-secondary">
            <div className="grid gird-row md:grid-cols-3 gap-8">
                <div>
                    <img src={posterUrl} alt="movie details" className="w-full md:h-72" />
                    {
                        user ? (
                            <div className="flex justify-between mt-10">
                        <div>
                            <Link to={`/edit/${_id}`} className="btn-glow">Edit</Link>
                        </div>
                        <div>
                            <Link onClick={handleMovieDelete} className="btn-glow">Delete</Link>
                            {/* <button  className="btn-glow">Delete</button> */}
                        </div>
                    </div>
                        ) :
                        ''
                    }
                </div>
                <div>
                    <h2 className="text-secondary font-medium text-xl mb-1 border-b pb-2">Story Summary</h2>
                    <p className="text-primary">{plotSummary}</p>
                </div>
                <div>
                    <h2 className="text-secondary font-medium text-xl mb-1 border-b pb-2">Story Title</h2>
                    <p className="text-primary text-2xl">{title}</p>
                </div>
            </div>
        </div>
    );
};

export default MovieDetails;
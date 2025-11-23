import { useLoaderData } from "react-router";
import Movies from "../../components/Movies/Movies";

const AllMovies = () => {
    const movies =useLoaderData()
    // console.log(movies)
    return (
        <div className="text-primary body-width py-10 md:py-16 px-4 md:px-0">
        <h2 className="text-lg md:text-3xl md:font-bold text-center mb-4 md:mb-8">All Movies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 space-y-4">
            {
                movies.map(movie => <Movies key={movie._id} movie={movie}></Movies>)
            }
        </div>
    </div>
    );
};

export default AllMovies;
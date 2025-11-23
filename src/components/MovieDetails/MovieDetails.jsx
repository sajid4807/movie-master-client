import { Link, useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";

const MovieDetails = () => {
    const movie = useLoaderData()
    const {user} =useAuth()
    const {_id,title,genre,addedAt,addedBy,country,language,posterUrl,plotSummary,duration,rating,cast,director,releaseYear,} =movie
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
                            <Link className="btn-glow">Delete</Link>
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
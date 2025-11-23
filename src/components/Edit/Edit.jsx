import { useLoaderData } from "react-router";
import useAuth from "../../hooks/useAuth";
import useAxios from "../../hooks/useAxios";

const Edit = () => {
  const {user} =useAuth()
  const authInfo = useAxios()
  // console.log(user.email)
  const movie = useLoaderData()
  const {_id,title,genre,addedAt,addedBy,country,language,posterUrl,plotSummary,duration,rating,cast,director,releaseYear,} =movie
  // console.log(movie)
  const handleEdit= (e) => {
    e.preventDefault()
    const form = e.target
    const title = form.title.value
    const genre = form.genre.value
    const cast = form.cast.value
    const director = form.director.value
    const posterUrl = form.posterUrl.value
    const country = form.country.value
    const language = form.language.value
    const releaseYear = parseInt(form.releaseYear.value)
const duration = parseInt(form.duration.value)
const rating = parseFloat(form.rating.value)
    const addedBy = user.email
    const newMovie ={
        title,genre,cast,director,posterUrl,country,language,duration,rating,releaseYear,addedBy
    }
    console.log(newMovie)
    authInfo.patch(`/allMovies/${_id}`,newMovie)
    .then(data=> {
      console.log(data)
    })
    


  }
  return (
    <div className="flex items-center">
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
                defaultValue={title}
                className="input w-full"
              />
            </div>
            {/* genre */}
            <div>
              <label className="block text-sm font-medium mb-1">Genre</label>
              <input
                type="text"
                name="genre"
                defaultValue={genre}
                className="input w-full"
              />
            </div>
            {/* cast */}
            <div>
              <label className="block text-sm font-medium mb-1">Cast</label>
              <input
                type="text"
                name="cast"
                defaultValue={cast}
                className="input w-full"
              />
            </div>
            {/* director */}
            <div>
              <label className="block text-sm font-medium mb-1">Director</label>
              <input
                type="text"
                name="director"
                defaultValue={director}
                className="input w-full"
              />
            </div>
            {/* email */}
            {/* <div>
              <label className="block text-sm font-medium mb-1">addedBy</label>
              <input
                type="email"
                name="email"
                defaultValue={movie.addedBy}
                placeholder="Enter your Email"
                className="input w-full"
                required
              />
            </div> */}
            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                PosterUrl
              </label>
              <input
                type="text"
                name="posterUrl"
                defaultValue={posterUrl}
                className="input w-full"
                required
              />
            </div>
            {/* country */}
            <div>
              <label className="block text-sm font-medium mb-1">Country</label>
              <input
                type="text"
                name="country"
                defaultValue={country}
                className="input w-full"
              />
            </div>
            {/* language */}
            <div>
              <label className="block text-sm font-medium mb-1">Language</label>
              <input
                type="text"
                name="language"
                defaultValue={language}
                className="input w-full"
              />
            </div>
            {/* duration */}
            <div>
              <label className="block text-sm font-medium mb-1">Duration</label>
              <input
                type="text"
                name="duration"
                defaultValue={duration}
                className="input w-full"
              />
            </div>
            {/* rating */}
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <input
                type="text"
                name="rating"
                defaultValue={rating}
                className="input w-full"
              />
            </div>
            {/* releaseYear */}
            <div>
              <label className="block text-sm font-medium mb-1">ReleaseYear</label>
              <input
                type="text"
                name="releaseYear"
                defaultValue={releaseYear}
                className="input w-full"
              />
            </div>
            {/* plotSummary */}
            <div>
              <label className="block text-sm font-medium mb-1">PlotSummary</label>
              <textarea 
                name="plotSummary" 
                rows='3'
                cols='3'
                defaultValue={plotSummary}
                className="input w-full" />
            </div>
            <div>
              <input type="submit" value="submit" className="btn btn-glow w-full cursor-pointer" />
            </div>
          </form>
    </div>
    </div>
    </div>
  );
};

export default Edit;

import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAuth from "../../hooks/useAuth";
import Loading from "../Loading/Loading";
import { FaStar } from "react-icons/fa6";

const WatchList = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  const [watchedList, setWatchedList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axiosSecure.get(`/my-watch-list?email=${user.email}`).then((data) => {
      setWatchedList(data.data);
      setLoading(false);
    });
  }, [axiosSecure, user]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="text-primary body-width py-10 md:py-16 px-4 md:px-0">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-4 md:mb-8">
        My Watch List
      </h2>
      <div className="grid grid-rows-1 md:grid-cols-4 gap-3">
        {watchedList && watchedList.length ? (
          watchedList.map((watch) => (
            <div key={watch._id} className="card glow-pulse">
              <figure className="relative">
                <img
                  src={watch.posterUrl}
                  className="h-48 md:h-60"
                  alt="movies"
                />
                <p className="absolute text-secondary flex items-center gap-x-2 bg-[#141414] px-2 bottom-0 rounded-tl-xl right-0">
                  <FaStar className="text-yellow-400" /> {watch.rating}
                </p>
              </figure>
              <div className="p-2">
                <h2 className="font-medium text-secondary hover:text-[#00c6ff] truncate md:whitespace-normal md:truncate-none">
                  {watch.title}
                </h2>
                <div className="flex justify-between">
                  <p>{watch.genre}</p>
                  <p>{watch.releaseYear}</p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-20">
            <h2 className="text-xl md:text-3xl font-bold text-primary mb-2 animate-bounce">
              No Movies in Your Watch List
            </h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default WatchList;

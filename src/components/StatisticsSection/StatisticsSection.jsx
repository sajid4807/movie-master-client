import { use } from "react";

const StatisticsSection = ({ userPromise, totalMovies }) => {
  const movies = use(totalMovies);
  const user = use(userPromise);
  // console.log(user.length,movies.length)
  return (
    <div className="flex justify-around text-primary pb-12">
      <div className=" text-center">
        <h2 className="text-7xl font-extrabold">{user.length}</h2>
        <p className="text-2xl font-bold">Total User</p>
      </div>
      <div className="text-center">
        <h3 className="text-7xl font-extrabold">{movies.length}</h3>
        <p className="text-2xl font-bold">Total Movies</p>
      </div>
    </div>
  );
};

export default StatisticsSection;

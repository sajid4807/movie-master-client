import { use } from "react";

const StatisticsSection = ({ userPromise, totalMovies }) => {
  const movies = use(totalMovies);
  const user = use(userPromise);
  // console.log(user.length,movies.length)
  return (
    <div className="pb-10 md:pb-20">
        <h3 className="mb-5 text-secondary border-l-4 border-l-[#00c6ff] pl-3 font-bold text-xl">Statistics Section</h3>
        <div className="flex justify-around text-primary">
      <div className=" text-center">
        <h2 className="text-7xl font-extrabold">{user.length}</h2>
        <p className="text-2xl font-bold">Total User</p>
      </div>
      <div className="text-center">
        <h3 className="text-7xl font-extrabold">{movies.length}</h3>
        <p className="text-2xl font-bold">Total Movies</p>
      </div>
    </div>
    </div>
  );
};

export default StatisticsSection;

import { use } from "react";

const StatisticsSection = ({userPromise,totalMovies}) => {
    const movies = use(totalMovies)
    const user =use(userPromise)
    console.log(user.length,movies.length)
    return (
        <div>
            <h2>{user.length}</h2>
            <h3>{movies.length}</h3>
        </div>
    );
};

export default StatisticsSection;
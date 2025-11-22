import { Suspense } from "react";
import Banner from "../Banner/Banner";
import StatisticsSection from "../StatisticsSection/StatisticsSection";
import Loading from "../Loading/Loading";
import TopRatedMovies from "../TopRatedMovies/TopRatedMovies";
const moviesPromise = fetch('http://localhost:3000/movies')
.then(res => res.json())
const userPromise = fetch('http://localhost:3000/user')
.then(res => res.json())
const totalMovies = fetch('http://localhost:3000/allMovies')
.then(res => res.json())
const Home = () => {
    return (
        <div className="body-width px-4 md:px-0 ">
            <Suspense fallback={<Loading></Loading>}><Banner moviesPromise={moviesPromise}></Banner></Suspense>
            <Suspense fallback={<Loading></Loading>}>
                <StatisticsSection userPromise={userPromise} totalMovies={totalMovies}></StatisticsSection>
            </Suspense>
            <Suspense>
                <TopRatedMovies totalMovies={totalMovies}></TopRatedMovies>
            </Suspense>
        </div>
    );
};

export default Home;
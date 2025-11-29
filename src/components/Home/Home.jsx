import { Suspense } from "react";
import Banner from "../Banner/Banner";
import StatisticsSection from "../StatisticsSection/StatisticsSection";
import Loading from "../Loading/Loading";
import TopRatedMovies from "../TopRatedMovies/TopRatedMovies";
import LatestMovies from "../LatestMovies/LatestMovies";
import AboutPlatform from "../AboutPlatform/AboutPlatform";
import LoadingCard from "../Loading/LoadingCard";
import Genre from "../Genre/Genre";
const moviesPromise = fetch(
  "https://movie-master-server-eta.vercel.app/movies"
).then((res) => res.json());

const totalMovies = fetch(
  "https://movie-master-server-eta.vercel.app/allMovies"
).then((res) => res.json());

const Home = () => {
  return (
    <div className="body-width px-4 md:px-0 ">
      <Suspense fallback={<Loading></Loading>}>
        <Banner moviesPromise={moviesPromise}></Banner>
      </Suspense>
      <Suspense fallback={<LoadingCard />}>
        <StatisticsSection totalMovies={totalMovies}></StatisticsSection>
      </Suspense>
      <Suspense fallback={<LoadingCard />}>
        <TopRatedMovies totalMovies={totalMovies}></TopRatedMovies>
      </Suspense>
      <Suspense fallback={<LoadingCard />}>
        <LatestMovies totalMovies={totalMovies}></LatestMovies>
      </Suspense>
      <Genre></Genre>
      <AboutPlatform></AboutPlatform>
    </div>
  );
};

export default Home;

import { Suspense } from "react";
import Banner from "../Banner/Banner";
import StatisticsSection from "../StatisticsSection/StatisticsSection";
import Loading from "../Loading/Loading";
import TopRatedMovies from "../TopRatedMovies/TopRatedMovies";
import LatestMovies from "../LatestMovies/LatestMovies";
import AboutPlatform from "../AboutPlatform/AboutPlatform";
import LoadingCard from "../Loading/LoadingCard";
import Genre from "../Genre/Genre";
import Newsletter from "../Newsletter/Newsletter";
const moviesPromise = fetch(
  "https://movie-master-server-eta.vercel.app/movies"
).then((res) => res.json());


const Home = () => {
  return (
    <div className="body-width px-4 md:px-4">
      <Suspense fallback={<Loading></Loading>}>
        <Banner moviesPromise={moviesPromise}></Banner>
      </Suspense>
        <StatisticsSection></StatisticsSection>
        <TopRatedMovies></TopRatedMovies>
        <LatestMovies></LatestMovies>
      <Genre></Genre>
      <AboutPlatform></AboutPlatform>
      <Newsletter/>
    </div>
  );
};

export default Home;

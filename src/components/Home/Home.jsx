import Banner from "../Banner/Banner";
const moviesPromise = fetch('http://localhost:3000/movies')
.then(res => res.json())
const Home = () => {
    return (
        <div className="body-width px-4 md:px-0">
            <Banner moviesPromise={moviesPromise}></Banner>
        </div>
    );
};

export default Home;
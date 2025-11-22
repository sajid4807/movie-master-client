
import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = ({moviesPromise}) => {
    const movies = use(moviesPromise)


    


   
    
    return (
    <div className="py-10 md:py-20">
        <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000 }}
      loop={true}
      className="w-full h-[300px] md:h-[600px] rounded-xl overflow-hidden"
    >
      {movies.map((movie) => (
        <SwiperSlide key={movie._id}>
          <div
            className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
            style={{ backgroundImage: `url(${movie.posterUrl})` }}
          >
            {/* Dark overlay */}
            {/* <div className="absolute inset-0 bg-black/60"></div> */}

            {/* Content */}
            {/* <div className="relative text-center text-white px-6 max-w-2xl">
              <h2 className="text-4xl font-bold mb-3">{movie.title}</h2>
              <p className="text-lg mb-5 line-clamp-3">
                {movie.plotSummary}
              </p>

              <div className="flex gap-4 justify-center">
                <button className="px-5 py-2 rounded-full bg-pink-500">
                  Watch Now
                </button>
                <button className="px-5 py-2 rounded-full bg-yellow-500 text-black">
                  Details
                </button>
              </div>
            </div> */}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Banner;
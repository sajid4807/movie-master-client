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
            <img src={movie.posterUrl } className="w-full" alt="" />
        </SwiperSlide>
      ))}
    </Swiper>
    </div>
  );
};

export default Banner;
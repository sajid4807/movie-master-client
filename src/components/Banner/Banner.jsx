import { use } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Calendar, Star } from "lucide-react";

const Banner = ({ moviesPromise }) => {
  const movies = use(moviesPromise);

  return (
    <div className="relative py-10 md:py-20 px-4">
      <div className="relative max-w-7xl mx-auto">

        {/* Swiper */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop
          className="relative w-full rounded-3xl overflow-hidden shadow-lg backdrop-blur-sm border border-white/10"
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#a78bfa",
            "--swiper-pagination-bullet-inactive-color": "#fff",
            "--swiper-pagination-bullet-inactive-opacity": "0.3",
          }}
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie._id}>
              <div className="relative w-full h-[50vh] md:h-[60vh] group">
                {/* Image */}
                <img
                  src={movie.posterUrl}
                  alt={movie.title || "movie poster"}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Gradient overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 via-transparent to-blue-900/30" />

                {/* Glow border */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute inset-0 border-2 border-purple-500/50 rounded-3xl animate-pulse" />
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-2xl md:text-4xl font-bold text-white mb-3 drop-shadow-lg">
                    {movie.title || "Featured Movie"}
                  </h3>

                  <div className="flex flex-wrap gap-3 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    {movie.rating && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/20 backdrop-blur-md rounded-full border border-yellow-500/30">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                        <span className="text-sm font-semibold text-yellow-100">
                          {movie.rating}
                        </span>
                      </div>
                    )}
                    {movie.year && (
                      <div className="flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/30">
                        <Calendar className="w-4 h-4 text-blue-400" />
                        <span className="text-sm font-semibold text-blue-100">
                          {movie.year}
                        </span>
                      </div>
                    )}
                    {movie.genre && (
                      <div className="px-3 py-1.5 bg-purple-500/20 backdrop-blur-md rounded-full border border-purple-500/30">
                        <span className="text-sm font-semibold text-purple-100">
                          {movie.genre}
                        </span>
                      </div>
                    )}
                  </div>

                  {movie.description && (
                    <p className="text-gray-300 text-sm md:text-base max-w-2xl line-clamp-2 md:line-clamp-3 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-200">
                      {movie.description}
                    </p>
                  )}
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-16 h-16 border-t-2 border-r-2 border-purple-500/50 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-16 h-16 border-b-2 border-l-2 border-blue-500/50 rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        

        {/* STYLE FIXES */}
        <style>{`
          /* Remove click focus circle */
          .swiper-pagination-bullet,
          .swiper-button-next,
          .swiper-button-prev {
            outline: none !important;
            box-shadow: none !important;
          }

          /* Navigation buttons */
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px !important;
            height: 50px !important;
            background: rgba(139, 92, 246, 0.2) !important;
            backdrop-filter: blur(10px) !important;
            border-radius: 50% !important;
            border: 1px solid rgba(255, 255, 255, 0.1) !important;
            transition: all 0.3s ease !important;
            z-index: 20 !important; /* mobile touch fix */
          }
          .swiper-button-next:hover,
          .swiper-button-prev:hover {
            background: rgba(139, 92, 246, 0.4) !important;
            transform: scale(1.1) !important;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px !important;
          }

          /* Pagination bullets */
          .swiper-pagination-bullet {
            width: 12px !important;
            height: 12px !important;
            transition: all 0.3s ease !important;
          }
          .swiper-pagination-bullet-active {
            width: 32px !important;
            border-radius: 6px !important;
          }

          /* Mobile responsive navigation */
          @media (max-width: 768px) {
            .swiper-button-next,
            .swiper-button-prev {
              width: 20px !important;
              height: 20px !important;
            }
          }
        `}</style>
      </div>
      {/* Scroll hint */}
        <div className="absolute opacity-60 bottom-4 mt-2 left-1/2 -translate-x-1/2 animate-bounce z-20">
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
    </div>
  );
};

export default Banner;

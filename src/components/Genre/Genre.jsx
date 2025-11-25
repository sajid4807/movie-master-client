// GenreSection.jsx
import { FaFilm, FaGhost, FaHeart, FaBolt, FaLaugh, FaDragon } from "react-icons/fa";

const genres = [
  { name: "Action", icon: <FaBolt /> },
  { name: "Romance", icon: <FaHeart /> },
  { name: "Horror", icon: <FaGhost /> },
  { name: "Comedy", icon: <FaLaugh /> },
  { name: "Fantasy", icon: <FaDragon /> },
  { name: "Drama", icon: <FaFilm /> },
];

export default function Genre() {
  return (
    <div className="mb-10 md:mb-20">
      {/* <h1 className="text-center text-3xl md:text-4xl font-bold text-white py-10">
        Explore Genres
      </h1> */}
      <h3 className="mb-5 text-secondary border-l-4 border-l-[#00c6ff] pl-3 font-bold text-xl">
        Genre
      </h3>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
        {genres.map((genre, index) => (
          <div
            key={index}
            className="
              relative group cursor-pointer
              flex flex-col items-center justify-center
              p-6 rounded-xl text-white font-semibold
              transition-all duration-500
              hover:scale-105
              overflow-hidden
              shadow-lg
            "
            style={{
              background:
                "linear-gradient(-45deg, #ff3d77, #3a1c71, #00c9ff, #92fe9d)",
              backgroundSize: "400% 400%",
              animation: "gradientAnimation 8s ease infinite",
            }}
          >
            <div className="text-4xl mb-2 group-hover:scale-125 transition-all duration-300">
              {genre.icon}
            </div>
            <span className="text-lg tracking-wide">{genre.name}</span>
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </div>
  );
}

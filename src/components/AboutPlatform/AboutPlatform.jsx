// AboutPlatform.jsx
import { motion } from "framer-motion";
import { FaPlayCircle, FaUsers, FaStar } from "react-icons/fa";

export default function AboutPlatform() {
  return (
    <div
      className="pb-10 md:pb-20"
      style={{ backgroundColor: "#14181c" }}
    >
      {/* Heading Animation */}
      <h3 className="mb-5 text-secondary border-l-4 border-l-[#00c6ff] pl-3 font-bold text-xl">
        About Platform
      </h3>

      {/* Cards Container Animation */}
      <motion.div
        className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ staggerChildren: 0.25 }}
        variants={{
          hidden: {},
          visible: {},
        }}
      >
        {/* Card Variants */}
        {[
          {
            title: "Stream Instantly",
            icon: <FaPlayCircle />,
            text: "Access thousands of movies with smooth streaming and a premium cinematic experience.",
          },
          {
            title: "Smart Personalization",
            icon: <FaUsers />,
            text: "Our smart system learns your taste and delivers perfectly matched recommendations.",
          },
          {
            title: "Premium Experience",
            icon: <FaStar />,
            text: "Beautiful UI, curated collections, advanced search, and top-tier visual quality.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            className="glass-card group"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            <motion.div
              className="text-4xl mb-4 text-white/90 group-hover:scale-125 transition-all duration-300"
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              {item.icon}
            </motion.div>

            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>

            <p className="text-sm text-white/80 leading-relaxed">
              {item.text}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* Glass Style */}
      <style>
        {`
          .glass-card {
            background: rgba(255, 255, 255, 0.08);
            backdrop-filter: blur(12px);
            border-radius: 18px;
            padding: 28px 22px;
            border: 1px solid rgba(255, 255, 255, 0.15);
            text-align: center;
            color: white;
            transition: all 0.4s ease;
            box-shadow: 0 8px 20px rgba(0,0,0,0.25);
          }
          .glass-card:hover {
            background: rgba(255, 255, 255, 0.14);
            border-color: rgba(255, 255, 255, 0.3);
            transform: translateY(-6px);
          }
        `}
      </style>
    </div>
  );
}

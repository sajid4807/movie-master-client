import { motion } from "framer-motion";
import { Grid3x3, Sparkles, Zap } from "lucide-react";
import { FaPlayCircle, FaUsers, FaStar } from "react-icons/fa";

export default function AboutPlatform() {
  return (
    <div
      className="pb-10 md:pb-20"
      style={{ backgroundColor: "#14181c" }}
    >
      <div className="relative mb-10 md:mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-cyan-500/30">
            <Zap className="w-4 h-4 text-cyan-400 fill-cyan-400" />
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent rounded-full" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          About Platform
        </h3>
      </div>
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
            // whileHover={{ scale: 1.05 }}
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

      <div className="mt-10 md:mt-12 h-1 bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent rounded-full" />
    </div>
  );
}

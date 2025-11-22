import { motion } from "framer-motion";

const Loading = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-white">
      <motion.div
        className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360],
          boxShadow: [
            "0 0 20px rgba(99,102,241,0.4)",
            "0 0 40px rgba(168,85,247,0.6)",
            "0 0 20px rgba(236,72,153,0.4)"
          ]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Glowing ring around loader */}
      <motion.div
        className="absolute w-52 h-52 rounded-full border-4 border-purple-300/30"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 0.1, 0.5]
        }}
        transition={{
          duration: 3,
          repeat: Infinity
        }}
      />
    </div>
    );
};

export default Loading;


import { motion } from "framer-motion";
import { Film, Sparkles } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: '#00c6ff'
        }} />
      </div>

      {/* Loading Container */}
      <div className="relative flex flex-col items-center gap-8">
        
        {/* Outer Rotating Ring 1 */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border-2 border-cyan-500/20"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Outer Rotating Ring 2 */}
        <motion.div
          className="absolute w-56 h-56 rounded-full border-2 border-purple-500/20 border-dashed"
          animate={{
            rotate: [360, 0],
            scale: [1, 1.15, 1]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Glowing Pulsing Ring */}
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

        {/* Main Loader Circle */}
        <motion.div
          className="relative w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 shadow-2xl flex items-center justify-center"
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
        >
          {/* Inner Circle with Icon */}
          <motion.div 
            className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center"
            animate={{
              rotate: [360, 180, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Film className="w-10 h-10 text-cyan-400" />
          </motion.div>
        </motion.div>

        {/* Orbiting Particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full shadow-lg"
            animate={{
              rotate: [0, 360],
              x: [0, Math.cos((i * 60 * Math.PI) / 180) * 100],
              y: [0, Math.sin((i * 60 * Math.PI) / 180) * 100],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}

        {/* Loading Text */}
        <motion.div 
          className="mt-32 flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-cyan-400 animate-pulse" />
            <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Loading
            </h2>
            <Sparkles className="w-5 h-5 text-purple-400 animate-pulse delay-300" />
          </div>

          {/* Animated Dots */}
          <div className="flex gap-2">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.3, 1, 0.3]
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2
                }}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="w-64 h-2 bg-slate-800 rounded-full overflow-hidden border border-cyan-500/20">
            <motion.div
              className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"
              animate={{
                x: ["-100%", "100%"]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </div>

          {/* Subtitle */}
          <motion.p 
            className="text-gray-400 text-sm"
            animate={{
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 2,
              repeat: Infinity
            }}
          >
            Please wait while we prepare your content...
          </motion.p>
        </motion.div>

        {/* Corner Brackets */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 pointer-events-none">
          <motion.div
            className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-cyan-500/40"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <motion.div
            className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-blue-500/40"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-purple-500/40"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
          />
          <motion.div
            className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-pink-500/40"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
          />
        </div>
      </div>
    </div>
  );
};

export default Loading;
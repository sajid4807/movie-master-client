import { use, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { Users, Film, TrendingUp, Sparkles } from "lucide-react";
import useAxios from "../../hooks/useAxios";

const StatisticsSection = ({ totalMovies }) => {
  const movies = use(totalMovies);
  const axiosInstance = useAxios();
  const [users, setUsers] = useState([]);
  const controls = useAnimation();

  useEffect(() => {
    axiosInstance('/user')
      .then((data) => {
        setUsers(data.data);
        controls.start("visible");
      });
  }, [axiosInstance, controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="pb-10 md:pb-20 relative overflow-hidden">
      {/* Section Header */}
      <div className="relative mb-8 md:mb-12">
        <div className="flex items-center gap-3 mb-2">
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full backdrop-blur-sm border border-white/10">
            <TrendingUp className="w-4 h-4 text-cyan-400" />
            <Sparkles className="w-4 h-4 text-blue-400" />
          </div>
          <div className="flex-1 h-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-transparent rounded-full" />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
          Platform Statistics
        </h3>
      </div>

      {/* Stats Cards Container */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
        {/* Users Card */}
        <motion.div
          className="relative group"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Card Content */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-cyan-500/20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
                color: '#00c6ff'
              }} />
            </div>

            {/* Icon */}
            <div className="relative mb-4 inline-flex">
              <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md" />
              <div className="relative p-3 bg-gradient-to-br from-cyan-500/30 to-blue-500/30 rounded-full border border-cyan-500/40">
                <Users className="w-8 h-8 text-cyan-400" />
              </div>
            </div>

            {/* Number with Animation */}
            <div className="relative">
              <motion.h2
                className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-cyan-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {users.length}
              </motion.h2>
              
              {/* Animated Counter Line */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-cyan-500 to-transparent rounded-full mb-3"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <p className="text-xl md:text-2xl text-cyan-100 font-bold flex items-center gap-2">
                Total Users
                <TrendingUp className="w-5 h-5 text-cyan-400" />
              </p>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-500/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-500/30 rounded-bl-2xl" />
          </div>
        </motion.div>

        {/* Movies Card */}
        <motion.div
          className="relative group"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Card Content */}
          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-8 border border-blue-500/20 overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: 'repeating-linear-gradient(-45deg, transparent, transparent 10px, currentColor 10px, currentColor 11px)',
                color: '#3b82f6'
              }} />
            </div>

            {/* Icon */}
            <div className="relative mb-4 inline-flex">
              <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md" />
              <div className="relative p-3 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full border border-blue-500/40">
                <Film className="w-8 h-8 text-blue-400" />
              </div>
            </div>

            {/* Number with Animation */}
            <div className="relative">
              <motion.h3
                className="text-6xl md:text-7xl font-extrabold bg-gradient-to-br from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent mb-2"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                {movies.length}
              </motion.h3>
              
              {/* Animated Counter Line */}
              <motion.div 
                className="h-1 bg-gradient-to-r from-blue-500 to-transparent rounded-full mb-3"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1, delay: 0.5 }}
              />
              
              <p className="text-xl md:text-2xl text-blue-100 font-bold flex items-center gap-2">
                Total Movies
                <Film className="w-5 h-5 text-blue-400" />
              </p>
            </div>

            {/* Decorative Corner Elements */}
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-blue-500/30 rounded-tr-2xl" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-blue-500/30 rounded-bl-2xl" />
          </div>
        </motion.div>
      </div>

      {/* Bottom Decorative Line */}
      <motion.div 
        className="mt-12 h-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent rounded-full"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1 }}
      />
    </div>
  );
};

export default StatisticsSection;
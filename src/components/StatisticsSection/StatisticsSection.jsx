import { use, useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
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
  }, [axiosInstance,controls]);

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <div className="pb-10 md:pb-20">
      <h3 className="mb-5 text-secondary border-l-4 border-l-[#00c6ff] pl-3 font-bold text-xl">
        Statistics Section
      </h3>
      <div className="flex justify-around text-primary">
        <motion.div
          className="text-center w-40"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h2
            className="text-7xl font-extrabold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {users.length}
          </motion.h2>
          <p className="text-2xl text-secondary font-bold">Users</p>
        </motion.div>
        <motion.div
          className="text-center w-40"
          variants={cardVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h3
            className="text-7xl font-extrabold"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            {movies.length}
          </motion.h3>
          <p className="text-2xl font-bold">Movies</p>
        </motion.div>
      </div>
    </div>
  );
};

export default StatisticsSection;

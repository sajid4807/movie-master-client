import { motion } from "framer-motion";

export default function AboutPlatform() {
  const features = [
    {
      title: "Advanced Search & Discovery",
      description:
        "Find films by genre, rating, cast, release year, streaming availability, and more.",
    },
    {
      title: "Smart Watchlists",
      description:
        "Create and organize custom lists with tags, notifications, and progress tracking.",
    },
    {
      title: "Personalized Insights",
      description:
        "Get tailored recommendations and analytics based on viewing habits.",
    },
    {
      title: "Cast & Crew Profiles",
      description:
        "Explore detailed information about actors, directors, and production teams.",
    },
    {
      title: "Release Tracking Alerts",
      description:
        "Stay updated when new movies hit theaters or streaming platforms.",
    },
    {
      title: "Community & Reviews",
      description: "Read user ratings, share opinions, and join discussions.",
    },
    {
      title: "Professional Dashboard (Pro Tier)",
      description:
        "Access box office data, trending metrics, and industry analytics.",
    },
  ];

  return (
    <section className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-4xl font-bold mb-6 text-center">About MovieMaster Pro</h2>
      <p className="text-base mb-12 text-center text-gray-600">
        MovieMaster Pro is an all-in-one platform built for movie lovers, creators, and industry professionals.
        Discover, track, and explore films with intelligent tools and an intuitive experience.
      </p>

      <div className="grid md:grid-cols-2 gap-6">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            whileHover={{ scale: 1.02 }}
            animate={{
              y: ["0%", "2%", "0%"],
              transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
            }}
            className="relative"
          >
            {/* Pulsing glow */}
            <motion.div
              className="absolute inset-0 rounded-2xl blur-xl bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 opacity-50"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.4, 0.6, 0.4],
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
            />

            {/* Card content */}
            <div className="relative bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-white rounded-2xl shadow-lg p-6 transition-all duration-500 hover:shadow-2xl">
              <h3 className="font-bold mb-2 text-lg">✅ {feature.title}</h3>
              <p className="text-sm">{feature.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

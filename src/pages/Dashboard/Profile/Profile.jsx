import { useState } from "react";
import { Edit2, Film, Eye } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading/Loading";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const axiosSecure = useAxiosSecure();

  // Fetch profile data
  const { data: user = {}, isLoading } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users/profile");
      return res.data;
    },
  });

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-950 to-black p-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6">

        {/* Left Sidebar */}
        <div className="lg:w-1/3 bg-slate-800 rounded-2xl p-6 flex flex-col items-center text-center shadow-lg">
          <div className="relative w-32 h-32 mb-4">
            <img
              src={user?.photoURL || "https://via.placeholder.com/150"}
              alt={user?.name || "Profile"}
              className="w-full h-full rounded-full object-cover border-4 border-cyan-500"
            />
            <button className="absolute bottom-0 right-0 bg-cyan-500 p-2 rounded-full text-white hover:bg-cyan-400 transition">
              <Edit2 className="w-4 h-4" />
            </button>
          </div>

          <h2 className="text-2xl font-bold text-white">
            {user?.name || "User Name"}
          </h2>
          <p className="text-sm text-gray-300">
            {user?.email || "user@email.com"}
          </p>
          <p className="mt-2 text-cyan-400 font-semibold">User</p>

          <div className="flex justify-around w-full mt-4 text-white">
            <div>
              <p className="font-bold">34</p>
              <p className="text-gray-400 text-xs">Uploaded</p>
            </div>
            <div>
              <p className="font-bold">12</p>
              <p className="text-gray-400 text-xs">WatchList</p>
            </div>
          </div>

          <button className="mt-6 bg-cyan-500 hover:bg-cyan-400 text-white px-4 py-2 rounded-full font-semibold transition">
            Edit Profile
          </button>
        </div>

        {/* Right Content */}
        <div className="lg:w-2/3 bg-slate-800 rounded-2xl p-6 shadow-lg">
          <div className="flex border-b border-gray-700 mb-6">
            {["overview", "edit", "activity"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 font-semibold ${
                  activeTab === tab
                    ? "border-b-4 border-cyan-500 text-white"
                    : "text-gray-400 hover:text-white"
                } transition`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>

          <div className="text-white">
            {activeTab === "overview" && (
              <div>
                <p className="text-gray-300">
                  Welcome back, here’s a summary of your activity.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                  <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-3">
                    <Film className="w-6 h-6 text-cyan-400" />
                    <div>
                      <p className="font-bold">Uploaded Movies</p>
                      <p className="text-gray-400">34 Movies</p>
                    </div>
                  </div>
                  <div className="bg-slate-700 rounded-xl p-4 flex items-center gap-3">
                    <Eye className="w-6 h-6 text-pink-400" />
                    <div>
                      <p className="font-bold">Watchlist</p>
                      <p className="text-gray-400">12 Movies</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "edit" && (
              <form className="space-y-4">
                <input
                  type="text"
                  defaultValue={user?.name}
                  placeholder="Full Name"
                  className="w-full p-3 rounded-lg bg-slate-700 text-white"
                />
                <input
                  type="email"
                  defaultValue={user?.email}
                  placeholder="Email"
                  className="w-full p-3 rounded-lg bg-slate-700 text-white"
                />
                <button className="bg-cyan-500 px-4 py-2 rounded-full">
                  Save Changes
                </button>
              </form>
            )}

            {activeTab === "activity" && (
              <p className="text-gray-300">Recent activity will appear here.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

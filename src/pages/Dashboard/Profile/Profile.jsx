import { useRef, useState } from "react";
import {
  Edit2,
  Film,
  Eye,
  User,
  Mail,
  Save,
  X,
  Sparkles,
  BarChart3,
  Activity,
} from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading/Loading";
import { useForm } from "react-hook-form";
import {
  PieChart,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { BarChart, Bar } from "recharts";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const axiosSecure = useAxiosSecure();
  const profileRef = useRef(null);
  const { register, handleSubmit, setValue } = useForm();

  // Fetch profile data
  const {
    data: user = {},
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["profile"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/profile");
      return res.data;
    },
  });

  // DashboardHome/Profile Sidebar
  const { data: stats = {} } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/movie-stats");
      return res.data;
    },
  });

  const handleOpenEditProfile = (user) => {
    profileRef.current.showModal();
    setValue("name", user.displayName);
    setValue("email", user.email);
  };

  const handleEditProfile = async (data) => {
    const updateProfile = {
      name: data.name,
    };

      const res = await axiosSecure.patch("/user/edit", updateProfile);
      if (res.data.success) {
        profileRef.current.close();
        refetch();
      }
  };

  const dataLine = [
    { name: "Uploaded Movies", count: stats.totalMovies || 0 },
    { name: "WatchList", count: stats.watchListCount || 0 },
  ];

  const dataPie = [
    { name: "Uploaded Movies", value: stats.totalMovies || 0 },
    { name: "WatchList", value: stats.watchListCount || 0 },
  ];

  const COLORS = ["#06b6d4", "#ec4899"];

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen py-10 md:py-16 px-4 md:px-8 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-6 relative">
        {/* Left Sidebar - Profile Card */}
        <div className="lg:w-1/3 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-2xl opacity-10 transition-opacity duration-500" />

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 border border-cyan-500/20 shadow-2xl backdrop-blur-sm flex flex-col items-center text-center overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)",
                  backgroundSize: "24px 24px",
                  color: "#00c6ff",
                }}
              />
            </div>

            {/* Profile Picture */}
            {/* Profile Picture */}
            <div className="relative w-44 h-44 mb-4 z-10 rounded-full overflow-hidden">
              {/* Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full p-[3px]">
                <div className="w-full h-full bg-slate-900 rounded-full overflow-hidden">
                  <img
                    src={user?.photoURL || "https://via.placeholder.com/300"}
                    alt="Profile"
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
              </div>
            </div>

            {/* User Info */}
            <h2 className="relative text-2xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-1">
              {user?.displayName || "User Name"}
            </h2>
            <p className="relative text-sm text-gray-400">
              {user?.email || "user@email.com"}
            </p>
            <div className="relative inline-flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 rounded-full backdrop-blur-sm mt-1">
              <User className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-semibold text-cyan-400">User</span>
            </div>

            {/* Stats */}
            <div className="relative flex justify-around w-full mt-3 gap-4">
              <div className="flex-1 p-4 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {stats.totalMovies || 0}
                </p>
                <p className="text-gray-400 text-xs mt-1 font-semibold">
                  Uploaded
                </p>
              </div>
              <div className="flex-1 p-4 bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-500/20 rounded-xl backdrop-blur-sm">
                <p className="text-3xl font-black bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                  {stats.watchListCount || 0}
                </p>
                <p className="text-gray-400 text-xs mt-1 font-semibold">
                  WatchList
                </p>
              </div>
            </div>

            {/* Edit Button */}
            <button
              onClick={() => handleOpenEditProfile(user)}
              className="relative w-full mt-6 group/btn overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover/btn:opacity-75 transition-opacity duration-300" />
              <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white group-hover/btn:from-cyan-600 group-hover/btn:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                <Edit2 className="w-4 h-4" />
                <span>Edit Profile</span>
              </div>
            </button>
          </div>
        </div>

        {/* Right Content - Tabs */}
        <div className="lg:w-2/3 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl blur-3xl opacity-10 transition-opacity duration-500" />

          <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 border border-blue-500/20 shadow-sm backdrop-blur-sm overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                  color: "#3b82f6",
                }}
              />
            </div>

            {/* Tabs */}
            <div className="relative flex border-b border-gray-700/50 mb-6">
              {[
                {
                  key: "overview",
                  label: "Overview",
                  icon: <BarChart3 className="w-4 h-4" />,
                },
                {
                  key: "edit",
                  label: "Edit",
                  icon: <Edit2 className="w-4 h-4" />,
                },
                {
                  key: "activity",
                  label: "Activity",
                  icon: <Activity className="w-4 h-4" />,
                },
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-6 py-3 font-semibold flex items-center gap-2 transition-all ${
                    activeTab === tab.key
                      ? "text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                  {activeTab === tab.key && (
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-t-full" />
                  )}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="relative text-white">
              {activeTab === "overview" && (
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Sparkles className="w-5 h-5 text-cyan-400" />
                    <p className="text-gray-300">
                      Welcome back, here's a summary of your activity.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                    {/* Bar Chart */}
                    <div className="relative group/chart">
                      <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl blur-lg opacity-0 group-hover/chart:opacity-20 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-cyan-500/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
                            <BarChart3 className="w-4 h-4 text-cyan-400" />
                          </div>
                          <h3 className="text-white font-bold">
                            Movies Overview
                          </h3>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                          <BarChart data={dataLine}>
                            <XAxis
                              dataKey="name"
                              stroke="#94a3b8"
                              style={{ fontSize: "11px" }}
                            />
                            <YAxis
                              stroke="#94a3b8"
                              style={{ fontSize: "11px" }}
                            />
                            <Tooltip
                              contentStyle={{
                                backgroundColor: "#1e293b",
                                border: "1px solid rgba(6, 182, 212, 0.3)",
                                borderRadius: "12px",
                                padding: "8px",
                              }}
                            />
                            {dataLine.map((entry, index) => (
                              <Bar
                                key={index}
                                dataKey="count"
                                fill={COLORS[index % COLORS.length]}
                                radius={[8, 8, 0, 0]}
                              />
                            ))}
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </div>

                    {/* Pie Chart */}
                    <div className="relative group/chart">
                      <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-2xl blur-lg opacity-0 group-hover/chart:opacity-20 transition-opacity duration-500" />
                      <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-pink-500/20 rounded-xl p-4 backdrop-blur-sm">
                        <div className="flex items-center gap-2 mb-3">
                          <div className="p-2 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg border border-pink-500/30">
                            <Film className="w-4 h-4 text-pink-400" />
                          </div>
                          <h3 className="text-white font-bold">
                            Movies Distribution
                          </h3>
                        </div>
                        <ResponsiveContainer width="100%" height={200}>
                          <PieChart>
                            <Pie
                              data={dataPie}
                              dataKey="value"
                              nameKey="name"
                              cx="50%"
                              cy="50%"
                              outerRadius={70}
                              label
                            >
                              {dataPie.map((entry, index) => (
                                <Cell
                                  key={`cell-${index}`}
                                  fill={COLORS[index % COLORS.length]}
                                />
                              ))}
                            </Pie>
                            <Legend />
                          </PieChart>
                        </ResponsiveContainer>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === "edit" && (
                <div
                  onSubmit={handleSubmit(handleEditProfile)}
                  className="space-y-4"
                >
                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                      <User className="w-4 h-4 text-cyan-400" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      defaultValue={user?.displayName}
                      placeholder="Full Name"
                      className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 transition-all"
                    />
                  </div>

                  <div className="relative">
                    <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                      <Mail className="w-4 h-4 text-blue-400" />
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      readOnly
                      defaultValue={user?.email}
                      placeholder="Email"
                      className="w-full px-4 py-3 bg-slate-800/30 border border-blue-500/20 rounded-xl text-gray-400 cursor-not-allowed"
                    />
                  </div>

                  <button
                    onClick={handleSubmit(handleEditProfile)}
                    className="relative group/btn overflow-hidden mt-4"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover/btn:opacity-75 transition-opacity duration-300" />
                    <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white group-hover/btn:from-cyan-600 group-hover/btn:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
                      <Save className="w-4 h-4" />
                      Save Changes
                    </div>
                  </button>
                </div>
              )}

              {activeTab === "activity" && (
                <div className="flex flex-col items-center justify-center py-12">
                  <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-gray-700/50 rounded-2xl backdrop-blur-sm">
                    <Activity className="w-12 h-12 text-gray-500 mx-auto mb-4" />
                    <p className="text-gray-400 text-center">
                      Recent activity will appear here.
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Edit Profile Modal */}
      <dialog ref={profileRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/20">
          <div onSubmit={handleSubmit(handleEditProfile)} className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
              Edit Profile
            </h3>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <User className="w-4 h-4 text-cyan-400" />
                Name
              </label>
              <input
                {...register("name")}
                className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white focus:outline-none focus:border-cyan-500/50 transition-all"
              />
            </div>

            <div>
              <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                <Mail className="w-4 h-4 text-blue-400" />
                Email
              </label>
              <input
                {...register("email")}
                readOnly
                className="w-full px-4 py-3 bg-slate-800/30 border border-blue-500/20 rounded-xl text-gray-400 cursor-not-allowed"
              />
            </div>

            <div className="modal-action gap-3">
              <button
                type="button"
                onClick={handleSubmit(handleEditProfile)}
                className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg text-white font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all flex items-center gap-2"
              >
                <Save className="w-4 h-4" />
                Save
              </button>
              <button
                type="button"
                onClick={() => profileRef.current.close()}
                className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg text-white font-semibold transition-all flex items-center gap-2"
              >
                <X className="w-4 h-4" />
                Cancel
              </button>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Profile;

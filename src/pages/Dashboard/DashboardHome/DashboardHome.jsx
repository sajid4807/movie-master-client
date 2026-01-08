import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Loading from "../../../components/Loading/Loading";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid
} from "recharts";
import { Film, Mail, BarChart3, TrendingUp, Sparkles } from "lucide-react";

const DashboardHome = () => {
  const axiosSecure = useAxiosSecure();

  // total movie stats
  const { data: stats = {}, isLoading } = useQuery({
    queryKey: ["user-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/movie-stats");
      return res.data;
    }
  });

  // genre chart stats
  const { data: genreStats = [], isLoading: chartLoading } = useQuery({
    queryKey: ["user-genre-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/user/movie-genre-stats");
      return res.data.map(item => ({
        genre: item._id,
        total: item.totalMovies
      }));
    }
  });

  if (isLoading || chartLoading) return <Loading />;

  return (
    <div className="body-width py-10 md:py-16 px-4 md:px-0 space-y-6 md:space-y-8 relative">

      {/* Page Header */}
      <div className="relative">
        <div className="flex items-center gap-3 mb-2">
          <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg border border-cyan-500/30">
            <BarChart3 className="w-5 h-5 text-cyan-400" />
          </div>
          <h1 className="text-3xl md:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            Dashboard Overview
          </h1>
        </div>
        <p className="text-gray-400 text-sm flex items-center gap-2 ml-12">
          <Sparkles className="w-4 h-4 text-cyan-400" />
          Your movie collection at a glance
        </p>
      </div>

      {/* Stats Card */}
      <div className="relative group">
        
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 border border-cyan-500/20 shadow-2xl backdrop-blur-sm overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)',
              backgroundSize: '24px 24px',
              color: '#00c6ff'
            }} />
          </div>

          {/* Header */}
          <div className="relative flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-xl border border-cyan-500/30">
              <Film className="w-6 h-6 text-cyan-400" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              User Movie Stats
            </h2>
          </div>

          {/* Stats Content */}
          <div className="relative space-y-6">
            {/* Email Section */}
            <div className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-xl border border-blue-500/20 backdrop-blur-sm">
              <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 flex-shrink-0">
                <Mail className="w-5 h-5 text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1 font-semibold">Email Address</p>
                <p className="text-white font-medium">{stats.email}</p>
              </div>
            </div>

            {/* Total Movies Section */}
            <div className="relative group/stat">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl blur-lg opacity-0  transition-opacity duration-500" />
              
              <div className="relative flex items-center justify-between p-6 bg-gradient-to-br from-slate-800/80 to-slate-900/80 rounded-xl border border-purple-500/20 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl border border-purple-500/30">
                    <TrendingUp className="w-6 h-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 mb-1 font-semibold">Total Movies Uploaded</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-rose-400 bg-clip-text text-transparent">
                        {stats.totalMovies}
                      </span>
                      <span className="text-gray-400 text-sm">movies</span>
                    </div>
                  </div>
                </div>

                {/* Decorative Circle */}
                <div className="hidden md:block relative">
                  <div className="w-24 h-24 rounded-full border-4 border-purple-500/20 flex items-center justify-center relative">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500/10 to-pink-500/10 animate-pulse" />
                    <Film className="w-12 h-12 text-purple-400 relative z-10" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bar Chart Card */}
      <div className="relative group">
     
        
        {/* Main Card */}
        <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-2xl p-6 md:p-8 border border-blue-500/20 shadow-2xl backdrop-blur-sm overflow-hidden">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
              backgroundSize: '20px 20px',
              color: '#3b82f6'
            }} />
          </div>

          {/* Header */}
          <div className="relative flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30">
              <BarChart3 className="w-6 h-6 text-blue-400" />
            </div>
            <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Movies by Genre
            </h2>
          </div>

          {/* Chart Container */}
          <div className="relative p-4 bg-slate-800/30 rounded-xl border border-blue-500/10 backdrop-blur-sm">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={genreStats}>
                <defs>
                  <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity={0.8} />
                    <stop offset="100%" stopColor="#3b82f6" stopOpacity={0.6} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" opacity={0.3} />
                <XAxis 
                  dataKey="genre" 
                  stroke="#94a3b8" 
                  style={{ fontSize: '12px', fontWeight: '500' }}
                />
                <YAxis 
                  allowDecimals={false} 
                  stroke="#94a3b8"
                  style={{ fontSize: '12px', fontWeight: '500' }}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: '#1e293b',
                    border: '1px solid rgba(6, 182, 212, 0.3)',
                    borderRadius: '12px',
                    padding: '12px',
                    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
                  }}
                  labelStyle={{ color: '#06b6d4', fontWeight: 'bold' }}
                  itemStyle={{ color: '#e2e8f0' }}
                  cursor={{ fill: 'rgba(6, 182, 212, 0.1)' }}
                />
                <Bar 
                  dataKey="total" 
                  fill="url(#barGradient)"
                  radius={[8, 8, 0, 0]}
                  maxBarSize={60}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Summary */}
          {genreStats.length > 0 && (
            <div className="relative mt-6 flex flex-wrap gap-3">
              {genreStats.slice(0, 4).map((item, index) => (
                <div 
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-lg backdrop-blur-sm"
                >
                  <span className="text-xs text-gray-400">{item.genre}:</span>
                  <span className="ml-2 text-sm font-bold text-blue-400">{item.total}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
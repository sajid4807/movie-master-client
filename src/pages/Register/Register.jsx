import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import useAxios from "../../hooks/useAxios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { UserPlus, Mail, Image, Lock, Sparkles, Chrome, User } from "lucide-react";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser, signInWithGoogle, setUser, profile } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const [show, setShow] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const { name, email, photo, password } = data;

    const passwordRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password must contain uppercase, lowercase & number",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        profile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...res.user, displayName: name, photoURL: photo });
            window.location.reload();
          });

        axiosInstance.post("/user", {
          displayName: name,
          email,
          photoURL: photo,
        });

        Swal.fire({
          icon: "success",
          title: "Register successful 🎉",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(location.state || "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Registration failed",
        });
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((res) => {
        axiosInstance.post("/user", {
          displayName: res.user.displayName,
          email: res.user.email,
          photoURL: res.user.photoURL,
        });

        Swal.fire({
          icon: "success",
          title: "Google SignIn successful 🎉",
          timer: 1500,
          showConfirmButton: false,
        });

        navigate(location.state || "/");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Google login failed",
        });
      });
  };

  return (
    <div className="flex items-center justify-center py-10 md:py-20 px-4 relative overflow-hidden min-h-screen">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(90deg, currentColor 1px, transparent 1px), linear-gradient(currentColor 1px, transparent 1px)',
          backgroundSize: '50px 50px',
          color: '#00c6ff'
        }} />
      </div>

      {/* Main Container */}
      <div className="relative flex items-center justify-center w-full max-w-7xl gap-8">
        
        {/* Left Side - Lottie Animation */}
        <div className="hidden lg:block w-1/2 relative">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-3xl blur-2xl" />
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-8 border border-cyan-500/20 shadow-2xl overflow-hidden">
              <DotLottieReact
                src="https://lottie.host/023f845a-074f-49c2-acdf-352697861ca6/uteHB9qd0Z.lottie"
                loop
                autoplay
                className="h-[500px] w-full"
              />
              
              {/* Corner Brackets */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-blue-500/20" />
            </div>
          </div>
        </div>

        {/* Right Side - Register Form */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div className="relative">
            {/* Outer Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-3xl blur-xl opacity-30" />
            
            {/* Main Card */}
            <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-6 md:p-8 border border-cyan-500/20 shadow-2xl backdrop-blur-sm">
              
              {/* Header Section */}
              <div className="text-center mb-6">
                {/* Icon Badge */}
                <div className="inline-flex items-center justify-center mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full blur-xl opacity-50" />
                    <div className="relative p-3 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl border border-cyan-500/40">
                      <UserPlus className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-2">
                  Register
                </h1>
                <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <p>Create your account to get started</p>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                
                {/* Name Input */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                    <User className="w-4 h-4 text-cyan-400" />
                    Name
                  </label>
                  <input
                    {...register("name", { required: true })}
                    placeholder="Your Name"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-cyan-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                  />
                  {errors.name?.type === "required" && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <span className="text-red-500">●</span> Name is required
                    </p>
                  )}
                </div>

                {/* Email Input */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                    <Mail className="w-4 h-4 text-blue-400" />
                    Email
                  </label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Enter your Email"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-blue-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                  />
                  {errors.email?.type === "required" && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <span className="text-red-500">●</span> Email is required
                    </p>
                  )}
                </div>

                {/* Photo URL Input */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                    <Image className="w-4 h-4 text-purple-400" />
                    Photo URL
                  </label>
                  <input
                    {...register("photo", { required: true })}
                    placeholder="Photo URL"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-purple-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm"
                  />
                  {errors.photo?.type === "required" && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <span className="text-red-500">●</span> Photo URL is required
                    </p>
                  )}
                </div>

                {/* Password Input */}
                <div className="relative">
                  <label className="flex items-center gap-2 text-sm font-semibold mb-2 text-gray-300">
                    <Lock className="w-4 h-4 text-pink-400" />
                    Password
                  </label>
                  <input
                    {...register("password", { required: true })}
                    type={show ? "text" : "password"}
                    placeholder="Enter Your Password"
                    className="w-full px-4 py-3 bg-slate-800/50 border border-pink-500/20 rounded-xl text-white placeholder:text-gray-500 focus:outline-none focus:border-pink-500/50 focus:bg-slate-800/70 transition-all backdrop-blur-sm pr-12"
                  />
                  <span
                    onClick={() => setShow(!show)}
                    className="absolute right-4 top-[42px] cursor-pointer z-50 text-gray-400 hover:text-white transition-colors"
                  >
                    {show ? <FaEye size={20} /> : <IoEyeOff size={20} />}
                  </span>
                  {errors.password?.type === "required" && (
                    <p className="text-red-400 text-sm mt-1 flex items-center gap-1">
                      <span className="text-red-500">●</span> Password is required
                    </p>
                  )}
                </div>

                {/* Register Button */}
                <button 
                  type="submit" 
                  className="relative w-full group overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white group-hover:from-cyan-600 group-hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl">
                    <UserPlus className="w-5 h-5" />
                    <span>Register</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                  </div>
                </button>

                {/* Divider */}
                <div className="flex items-center gap-3 my-4">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                  <span className="text-gray-500 text-sm">OR</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
                </div>

                {/* Google Signin Button */}
                <button
                  type="button"
                  onClick={handleGoogleSignin}
                  className="relative w-full group overflow-hidden cursor-pointer"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-red-500 to-orange-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300" />
                  <div className="relative px-6 py-3 bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/40 rounded-xl font-semibold text-white group-hover:border-red-400 transition-all duration-300 backdrop-blur-sm flex items-center justify-center gap-2">
                    <Chrome className="w-5 h-5" />
                    <span>Login with Google</span>
                  </div>
                </button>

                {/* Login Link */}
                <div className="text-center pt-2">
                  <p className="text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link
                      to="/login"
                      className="text-cyan-400 hover:text-cyan-300 font-semibold underline transition-colors"
                    >
                      Login
                    </Link>
                  </p>
                </div>
              </form>

              {/* Decorative Corner Elements */}
              <div className="absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-cyan-500/20" />
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-blue-500/20" />
              <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-purple-500/20" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-b-2 border-r-2 border-pink-500/20" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
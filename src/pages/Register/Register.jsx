import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import useAxios from "../../hooks/useAxios";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const Register = () => {
  const { createUser, signInWithGoogle, setUser, profile } = useAuth();
  const axiosInstance = useAxios();
  const navigate = useNavigate();
  const location = useLocation();
  const [error, setError] = useState("");
  const [show, setShow] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const photoURL = form.photo.value;
    const password = form.password.value;
    const passwordRex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRex.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "❌ Password must include at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
      });
      return;
    }

    createUser(email, password)
      .then((res) => {
        const user = res.user;
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Register successful 🎉",
          showConfirmButton: false,
          timer: 1500,
        });
        profile({ displayName, photoURL })
          .then(() => {
            setUser({ ...user, displayName, photoURL });
            window.location.reload();
          })
          .catch((error) => {
            setError(error.message);
          });
        const newUser = { displayName, email, photoURL };
        axiosInstance.post("/user", newUser).then((data) => {
          setUser(data.data);
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "❌ Registration failed. Please try again.",
        });
        setError(error.message);
      });
  };

  const handleGoogleSignin = () => {
    signInWithGoogle()
      .then((res) => {
        const newUser = {
          name: res.user.displayName,
          email: res.user.email,
          image: res.user.photoURL,
        };
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google SignIn successful 🎉",
          showConfirmButton: false,
          timer: 1500,
        });

        axiosInstance.post("/user", newUser).then((data) => {
          console.log("after saving data", data);
        });
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Account not found. Try again or sign up 🚫",
        });
        setError(error.message);
      });
  };

  return (
    <div className="flex items-center py-10 md:py-20">
      <div className="h-96 w-1/2 hidden lg:block">
        <DotLottieReact
          src="https://lottie.host/023f845a-074f-49c2-acdf-352697861ca6/uteHB9qd0Z.lottie"
          loop
          autoplay
        />
      </div>
      <div className="card bg-base-100 p-5 mx-auto w-[350px] md:w-[450px] shrink-0 shadow-2xl">
        <h1 className="text-5xl font-bold mb-2 text-center">Register</h1>

        <div className="">
          <form onSubmit={handleRegister} className="space-y-4">
            {/* name */}
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                className="input w-full"
                required
              />
            </div>
            {/* email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input w-full"
                required
              />
            </div>
            {/* Photo URL */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input w-full"
                required
              />
            </div>
            {/* password */}
            <div className="relative">
              <label className="block text-sm font-medium mb-1">Password</label>
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter Your Password"
                className="input w-full"
                required
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[10px] top-[32px] cursor-pointer z-50"
              >
                {show ? <FaEye size={24} /> : <IoEyeOff size={24} />}
              </span>
            </div>
            {error && <p>{error}</p>}
            <button type="submit" className="btn btn-glow w-full">
              Register
            </button>
            <p className="flex justify-center font-bold">
              ------------------------------------
            </p>
            {/* Google Signin */}
            <button
              type="button"
              onClick={handleGoogleSignin}
              className="btn btn-glow w-full cursor-pointer"
            >
              Login with Google
            </button>
            <div className="text-center mt-3">
              <p className="text-sm text-primary">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-base-content hover:text-primary font-medium underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

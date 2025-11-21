import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const Login = () => {
    const {signInUser,setUser,signInWithGoogle} = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const [error,setError] =useState('')
    const [show,setShow]= useState(false)


    const handleLogin = (e)=> {
        e.preventDefault()
        const form = e.target
        const email = form.email.value;
        const password = form.password.value;
        console.log({email,password})


        signInUser(email, password)
      .then((res) => {
        Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Login successful 🎉",
              showConfirmButton: false,
              timer: 1500
            });
        setUser(res.user);
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch((error) => {
             Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "❌ Login failed. Please try again.",
            });
        setError(error.message);
      });
        
    }



    const handleGoogleSignin = () => {
        signInWithGoogle()
              .then(res => {
                Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Google SignIn successful 🎉",
          showConfirmButton: false,
          timer: 1500
        });
        navigate(`${location.state? location.state: '/'}`)
              })
              .catch(error => {
                Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Account not found. Try again or sign up 🚫",
        });
                setError(error.message)
              })

    }

    return (
        <div className="flex items-center h-screen">
      <div className="card bg-base-100 p-5 mx-auto w-[350px] md:w-[450px] shrink-0 shadow-2xl">
      <h1 className="text-5xl font-bold mb-2 text-center">Login</h1>

    <div className="">
       <form onSubmit={handleLogin} className="space-y-4">
            {/* email */}
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="input w-full"
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
              />
              <span
                onClick={() => setShow(!show)}
                className="absolute right-[10px] top-[32px] cursor-pointer z-50"
              >
                {show ? <FaEye size={24} /> : <IoEyeOff size={24} />}
              </span>
            </div>
            {error && <p>{error}</p>}
            <p className="text-sm font-medium">Forgot Password</p>
            <button
              type="submit"
              className="btn btn-glow w-full"
            >
              Login
            </button>
            <p className="flex justify-center font-bold">------------------------------------</p>
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
                              Don’t have an account?{''} 
                <Link
                  to="/register"
                  className="text-base-content hover:text-primary font-medium underline"
                > 
                   Register
                </Link>
              </p>
            </div>
          </form>
    </div>
    </div>
    </div>
    );
};

export default Login;
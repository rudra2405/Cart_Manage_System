import React from "react";
import { useState } from "react";
// import Header from "../Users/Header";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../firebase";

const auth = getAuth(app);

export default function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all fields!",
      });
      return;
    }

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
      );
      const user = userCredential.user;
      console.log("User logged in:", user);

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: `Welcome back, ${user.email}!`,
      });

      navigate("/");
    } catch (error) {
      console.error("Error logging in:", error);
      Swal.fire({
        icon: "error",
        title: "Login Failed",
        text: error.message,
      });
    }
  };

  return (
    <>
      {/* <Header></Header> */}
      <div
        className="min-h-screen flex items-center justify-center"
        // style={{
        //   backgroundImage:
        //     "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKYyfG1WNSjplSrn9v9EasnT4DNkuLFrVfzQ&s')",
        // }}
      >
        <div className="w-full max-w-md mx-auto rounded-lg p-8 mt-10 mb-10 shadow-2xl">
          <h1 className="text-3xl font-bold text-center mb-6">Login</h1>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 font-bold" htmlFor="email">
                Email:
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4 relative">
              <label className="block mb-1 font-bold" htmlFor="password">
                Password:
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="border border-gray-300 p-2 rounded-md w-full"
                placeholder="Enter your password"
              />
              <span
                className="absolute right-3 top-11 cursor-pointer text-white"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-2 rounded-md hover:bg-blue-700 transition"
            >
              Login
            </button>

            <p className="text-center mt-4 text-black">
              Don’t have an account?{" "}
              <Link to="/register" className="text-blue-600 hover:underline">
                Register here
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

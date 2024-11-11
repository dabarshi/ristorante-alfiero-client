import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/transparentLogo.png";
import axiosInstance from "../../api/axiosInstance";

const RegisterPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();

    // Password validation
    if (
      password.length < 8 ||
      !/\d/.test(password) ||
      !/[A-Z]/.test(password)
    ) {
      setError(
        "Password must be at least 8 characters long, include one uppercase letter and one number."
      );
      return;
    }

    try {
      const response = await axiosInstance.post("/auth/register", {
        username,
        email,
        password,
      });
      setSuccess("Registration successful! Redirecting to login...");
      setError("");
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      setError("Registration failed. Please try again.");
      setSuccess("");
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col bg-[#5D829D] md:flex-row h-screen">
      <div className="hidden md:flex w-1/2 items-center justify-center">
        <div className="bg-white rounded-full">
          <img src={logo} alt="Logo" className="max-w-xs" />
        </div>
      </div>
      <div className="hidden md:flex items-center justify-center">
        <div className="border-r-2 border-gray-300 h-3/4"></div>
      </div>
      <div className="flex w-full md:w-1/2 items-center justify-center p-4">
        <form
          onSubmit={handleRegister}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="username"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          </div>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-400"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          {success && <p className="text-green-500 text-sm mt-2">{success}</p>}

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;

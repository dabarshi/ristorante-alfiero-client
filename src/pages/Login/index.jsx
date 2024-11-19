import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo/transparentLogo.png";
import axiosInstance from "../../api/axiosInstance";
import { saveAuthToken } from "../../utils/auth";

const LoginPage = () => {
  const [identifier, setIdentifier] = useState(""); // Change to a generic identifier
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
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
      const response = await axiosInstance.post("/auth/login", {
        username: identifier, // Passing identifier as username or email
        password,
      });
      saveAuthToken(response.data.token); // Save token to localStora
      navigate("/admin");
    } catch (error) {
      setError("Login failed. Please check your credentials.");
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
          onSubmit={handleLogin}
          className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md"
        >
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

          <div className="mb-4">
            <label
              className="block text-sm font-semibold mb-2"
              htmlFor="identifier"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="identifier"
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
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
            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-300"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;

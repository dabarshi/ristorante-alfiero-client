import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
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

    // Assume login is successful, save authentication state
    localStorage.setItem("auth", "true"); // Mock authentication

    // Redirect to admin dashboard
    navigate("/admin");
  };

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="hidden md:flex w-1/2 bg-blue-500 items-center justify-center">
        <img src="/logo.png" alt="Logo" className="max-w-xs" />
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

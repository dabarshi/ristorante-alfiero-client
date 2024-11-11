import axiosInstance from "../api/axiosInstance";

// Function to check if the token is valid by calling the backend
export const isAuthenticated = async () => {
  const token = localStorage.getItem("authToken");
  if (!token) return false;

  try {
    const response = await axiosInstance.get("/auth/verify-token", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.status === 200;
  } catch (error) {
    console.error("Token verification failed:", error);
    return false;
  }
};

// Function to save token after login
export const saveAuthToken = (token) => {
  localStorage.setItem("authToken", token);
};

// Function to remove token on logout
export const removeAuthToken = () => {
  localStorage.removeItem("authToken");
};

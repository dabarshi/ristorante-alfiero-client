import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { isAuthenticated } from "../utils/auth";

const ProtectedRoute = ({ element }) => {
  const [authStatus, setAuthStatus] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated();
      setAuthStatus(isAuth);
      if (!isAuth) navigate("/login");
    };
    checkAuth();
  }, [navigate]);

  if (authStatus === null) return <div>Loading...</div>;
  return authStatus ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;

import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import OurMenu from "../pages/Menu";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Book from "../pages/Book";
import LoginPage from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import SpecialOfferManager from "../components/SpecialOfferManager/SpecialOfferManager";
// import RegisterPage from "../pages/Register";

// Function to check authentication with the backend

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <OurMenu />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/test",
        element: <SpecialOfferManager />,
      },
      // {
      //   path: "/register",
      //   element: <RegisterPage />,
      // },
      {
        path: "/admin",
        element: <ProtectedRoute element={<AdminDashboard />} />, // Protect the AdminDashboard route
      },
    ],
  },
]);

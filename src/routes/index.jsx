import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import OurMenu from "../pages/Menu";
import About from "../pages/About";
// import Events from "../pages/Events";
import Contact from "../pages/Contact";
// import Blogs from "../pages/Blogs";
import Book from "../pages/Book";
import LoginPage from "../pages/Login";
import AdminDashboard from "../pages/AdminDashboard";
import ProtectedRoute from "./ProtectedRoute";
import RegisterPage from "../pages/Register";

// import Menu2 from "../pages/Menu2";
// import Menu3 from "../pages/Menu3";

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
      // {
      //   path: "/menu2",
      //   element: <Menu2 />,
      // },
      // {
      //   path: "/menu3",
      //   element: <Menu3 />,
      // },
      // {
      //   path: "/blog",
      //   element: <Blogs />,
      // },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/book",
        element: <Book />,
      },
      // {
      //   path: "/events",
      //   element: <Events />,
      // },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/admin",
        element: <ProtectedRoute element={<AdminDashboard />} />, // Protect the AdminDashboard route
      },
    ],
  },
]);

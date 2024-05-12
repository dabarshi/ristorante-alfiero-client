import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { menuItems } from "../../data/data";

const NavMenu = ({ option }) => {
  const { link, optionName } = option;
  const currentUrl = window.location.pathname;
  return (
    <Link
      to={link}
      className={`${
        currentUrl.includes(link) ? "" : ""
      } ${"text-white hover:bg-gray-700 px-3 py-2 rounded-md"}`}
    >
      {optionName}
    </Link>
  );
};

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 `}
      style={{ backgroundColor: `${isScrolled ? "#111" : "transparent"}` }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <span className="text-white font-bold">Ristorante Alfiero</span>
          </div>
          <div className="flex items-center">
            <div className="hidden lg:block">
              {menuItems.map((option) => (
                <NavMenu key={option.optionName} option={option} />
              ))}
              {/* <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Menu Item 1
              </a>
              <a
                href="#"
                className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
              >
                Menu Item 2
              </a> */}
              {/* Add more menu items here */}
            </div>
            <div className="block lg:hidden">
              <button
                className="text-white hover:text-gray-300 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentcolor"
                >
                  {isOpen ? (
                    <path d="M6 18L18 6M6 6l12 12"></path>
                  ) : (
                    <path d="M4 6h16M4 12h16m-7 6h7"></path>
                  )}
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className={`lg:hidden ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {/* {menuItems.map((option) => (
            <NavMenu key={option.optionName} option={option} />
          ))} */}
          <a
            href="#"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md"
          >
            Menu Item 1
          </a>
          <a
            href="#"
            className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md"
          >
            Menu Item 2
          </a>
          {/* Add more menu items here */}
        </div>
      </div>
    </nav>
  );
};

export default Header;

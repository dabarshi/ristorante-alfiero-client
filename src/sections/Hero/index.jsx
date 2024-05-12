import { useEffect, useState } from "react";

const Hero = ({ slides }) => {
  // need to fix the parallax effiect
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000); // Auto change every 10 seconds
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative h-screen">
      {slides.map((imgSet, index) => (
        <figure
          key={index}
          className={`absolute inset-0 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <img
            src={imgSet.img}
            alt={imgSet.alt}
            className="w-full h-full object-cover"
            // style={{ transform: "translate3d(0,300px,0)" }}
            style={{
              transition: "transform ease-in",
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          />
          <div
            className={`absolute inset-0 `}
            style={{
              backgroundColor: "#000000",
              opacity: 0.6,
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          ></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-4xl font-bold">
            {imgSet.alt}
          </div>
        </figure>
      ))}
      <button
        onClick={prevSlide}
        className="absolute z-10 top-1/2 left-5 transform -translate-y-1/2 p-2 rounded-md text-white shadow-2xl"
        style={{ backgroundColor: "#000000" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M7.72 12.53a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 1 1 1.06 1.06L9.31 12l6.97 6.97a.75.75 0 1 1-1.06 1.06l-7.5-7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-10 top-1/2 right-5 transform -translate-y-1/2 p-2 rounded-md text-white shadow-2xl"
        style={{ backgroundColor: "#000000" }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-6 h-6"
        >
          <path
            fillRule="evenodd"
            d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </div>
  );
};

export default Hero;

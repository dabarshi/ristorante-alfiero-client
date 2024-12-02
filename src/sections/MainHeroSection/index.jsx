import { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { gsap } from "gsap";

const MainHeroSection = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Animate slide change
  const handleSlideChange = useCallback(() => {
    const tl = gsap.timeline();

    // Animate out current slide
    tl.to(".slide-content", {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });

    // Animate in new slide
    tl.fromTo(
      ".slide-content",
      { x: 100, opacity: 0 },
      { x: 0, opacity: 1, duration: 1, ease: "power2.out" }
    );
  }, []);

  // Navigate to the next slide
  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    handleSlideChange();
  }, [slides.length, handleSlideChange]);

  // Navigate to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    handleSlideChange();
  };

  // Auto-slide every 15 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 15000);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Trigger animation on slide change
  useEffect(() => {
    handleSlideChange();
  }, [currentSlide, handleSlideChange]);

  // Implement parallax effect with GSAP
  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      gsap.to(".background", {
        backgroundPosition: `center ${scrollY * 0.5}px`, // Adjust the multiplier for desired parallax strength
        ease: "none",
        duration: 0,
      });
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div className="h-screen group overflow-hidden relative">
      {slides.map((imgSet, index) => (
        <figure
          key={index}
          className={`absolute inset-0 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000`}
        >
          <div
            className="absolute inset-0 background"
            style={{
              backgroundImage: `url(${imgSet.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div className="absolute inset-0 bg-black bg-opacity-65"></div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center space-y-6 slide-content">
              <div className="space-y-4">
                <h1 className="text-white tracking-[8px] text-xl md:text-5xl font-bold">
                  {imgSet.title}
                </h1>
                <p className="text-amber-500 text-sm md:text-lg font-semibold">
                  {imgSet.subtitle}
                </p>
              </div>
              <div className="space-x-4">
                <Link to="/book">
                  <PrimaryButton text={"Book Now"} />
                </Link>
                <Link to="/menu">
                  <PrimaryButton text={"View Menu"} />
                </Link>
              </div>
            </div>
          </div>
        </figure>
      ))}
      <button
        onClick={prevSlide}
        className="absolute z-20 top-1/2 left-5 bg-black transform -translate-y-1/2 p-2 rounded-md text-white shadow-2xl opacity-5 group-hover:opacity-100"
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-20 top-1/2 right-5 bg-black transform -translate-y-1/2 p-2 rounded-md text-white shadow-2xl opacity-5 group-hover:opacity-100"
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MainHeroSection;

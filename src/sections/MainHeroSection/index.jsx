import { useCallback, useEffect, useState } from "react";
import { PrimaryButton } from "../../components/Buttons/Buttons";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import styles from "./HeroStyle.module.css";
import { Link } from "react-router-dom";

const MainHeroSection = ({ slides }) => {
  // need to fix the parallax effiect
  // eslint-disable-next-line no-unused-vars
  const [scrollY, setScrollY] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [btnAnitationClass, setBtnAnimationClass] = useState("");
  const [subtitleAnitationClass, setSubtitleAnimationClass] = useState("");
  const [titleAnitationClass, setTitleAnimationClass] = useState("");

  // Scroll tracking Function

  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  // Handle Animation with Slide Change

  const handleSlideChange = useCallback(() => {
    setBtnAnimationClass("");
    setSubtitleAnimationClass("");
    setTitleAnimationClass("");

    setTimeout(() => {
      setBtnAnimationClass(styles.slideUpAnimation);
      setSubtitleAnimationClass(styles.slideUpSubtitleAnimation);
      setTitleAnimationClass(styles.slideRightToCenterAnimation);
    }, 0);

    const timer = setTimeout(() => {
      setBtnAnimationClass(styles.slideLeftAnimation);
      setSubtitleAnimationClass(styles.slideLeftAnimation);
      setTitleAnimationClass(styles.slideLeftAnimation);
    }, 9000);

    return () => clearTimeout(timer);
  }, []);

  // Function to handle slide change button

  const nextSlide = useCallback(() => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
    handleSlideChange();
  }, [slides.length, handleSlideChange]);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
    handleSlideChange();
  };

  // Handle Auto Slide Change

  useEffect(() => {
    const interval = setInterval(nextSlide, 10000);
    window.addEventListener("scroll", handleScroll);
    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slides, nextSlide]);

  // initiate Animations

  useEffect(() => {
    handleSlideChange();
  }, [currentSlide, handleSlideChange]);

  return (
    <div className="relative h-screen group">
      {slides.map((imgSet, index) => (
        <figure
          key={index}
          className={`absolute inset-0 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          } transition-opacity duration-1000 bg-fixed`}
          style={{
            backgroundImage: `url(${imgSet.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div
            className={`absolute inset-0 `}
            style={{
              backgroundColor: "#000000",
              opacity: 0.6,
              transform: `translateY(${scrollY * 0.4}px)`,
            }}
          ></div>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center space-y-8">
              <div className="space-y-4">
                {/* Secction Title */}
                <h1
                  className={`text-white tracking-[8px] text-xl md:text-5xl font-bold ${titleAnitationClass}`}
                >
                  {imgSet.alt}
                </h1>
                {/* Section Subtitle */}
                <p
                  className={`text-amber-500 text-sm md:text-base ${subtitleAnitationClass}`}
                >
                  Enjoy the real fresh food from our chef
                </p>
              </div>
              {/* Hero Section Button */}
              <div className={`space-x-5 ${btnAnitationClass}`}>
                <PrimaryButton text={"Book Now"} />
                <Link to="/menu">
                  <PrimaryButton text={"View Menu"} />
                </Link>
              </div>
            </div>
          </div>
        </figure>
      ))}
      {/* Arrow Button to change Slide */}
      <button
        onClick={prevSlide}
        className="absolute z-10 top-1/2 left-5 transform -translate-y-1/2 p-2 rounded-md text-white shadow-2xl opacity-5 group-hover:opacity-100"
        style={{ backgroundColor: "#000000" }}
      >
        <IoIosArrowBack />
      </button>
      <button
        onClick={nextSlide}
        className="absolute z-10 top-1/2 right-5 transform -translate-y-1/2 p-2 rounded-md text-white shadow-2xl opacity-5 group-hover:opacity-100"
        style={{ backgroundColor: "#000000" }}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
};

export default MainHeroSection;

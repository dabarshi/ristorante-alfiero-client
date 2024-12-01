import { gsap } from "gsap";
import styles from "./HeroSubtitleStyle.module.css";
import { useEffect, useRef } from "react";

const SecondaryHeroSection = ({ title, subtitle, index, SecondaryHeroImg }) => {
  const containerRef = useRef(null);
  const heroImg = SecondaryHeroImg[index];

  // Parallax Effect
  useEffect(() => {
    const handleParallax = () => {
      const scrollY = window.scrollY;
      const container = containerRef.current;

      if (container) {
        const { top, height } = container.getBoundingClientRect();
        const positionY = (scrollY - top) * 0.5; // Adjust multiplier for parallax effect
        gsap.to(container, {
          backgroundPosition: `center ${positionY}px`,
          ease: "none",
          duration: 0,
        });
      }
    };

    window.addEventListener("scroll", handleParallax);
    return () => window.removeEventListener("scroll", handleParallax);
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-96 bg-cover `}
      style={{
        backgroundImage: `url(${heroImg.img})`,
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className={`text-2xl ${styles.subtitle}`}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;

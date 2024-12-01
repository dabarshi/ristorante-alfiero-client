import { useEffect, useRef } from "react";
import FoodCard from "../../components/FoodCard/FoodCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { gsap } from "gsap";
import useVisibility from "../../hooks/useVisibility";
import styles from "./TodaySpecilStyle.module.css";

const TodaySpecial = ({ FoodCardData, backgroundImageUrl }) => {
  const [cardRef, isVisible] = useVisibility(); // Visibility hook for animation
  const containerRef = useRef(null);

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
      className="bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="py-28 px-2 space-y-12 bg-black bg-opacity-60">
        <SectionTitle
          title={"Today's Special"}
          subTitle={"Fresh & delicious"}
        />
        <div
          ref={cardRef}
          className={`flex flex-col md:flex-row max-w-7xl mx-auto gap-10 ${
            isVisible ? styles.slideUpAnimation : ""
          }`}
        >
          {FoodCardData.map((data) => (
            <FoodCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;

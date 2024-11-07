import { useEffect, useState } from "react";
import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";

const Featured = ({ FeaturedCardData }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const threshold = 200; // Adjust this value to set when the card should move

      if (scrollPosition > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative px-8 z-30 bg-[#121217]">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-wrap justify-center gap-10 ${
            isScrolled ? "py-16" : "-translate-y-28"
          } md:space-y-0 space-y-20 transition-all duration-1000`}
        >
          {FeaturedCardData.map((data) => (
            <FeaturedCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;

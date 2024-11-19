import { useMemo, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { DishesMenuData } from "../../data/data";
import useVisibility from "../../hooks/useVisibility";
import styles from "./MenuStyle.module.css";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("APPETISERS");
  const [cardRef, isVisible] = useVisibility();
  const [showAll, setShowAll] = useState(false);

  const filteredData = useMemo(
    () => DishesMenuData.filter((item) => item.menuCategory === activeCategory),
    [activeCategory]
  );

  const categories = [
    "APPETISERS",
    "MAIN",
    "SECOND",
    "SIDES",
    "DESSERTS",
    "PIZZAS",
    "DRINKS",
  ];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    setShowAll(false); // Reset to default view when switching categories
  };

  const visibleData = showAll ? filteredData : filteredData.slice(0, 6);

  return (
    <div ref={cardRef} className="py-20 bg-[#121217]">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle title={"Our Menu"} subTitle={"Healthy & Tasty"} />

        {/* Category Buttons */}
        <div className="grid grid-cols-3 gap-4 md:w-1/2 mx-auto px-6">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`${
                activeCategory === category
                  ? "border-amber-500"
                  : "border-[#ffffff43]"
              } border text-white text-xs md:font-semibold py-2 md:px-4 hover:bg-[#dfcfcf09]`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 text-white py-8 px-12 ${
            isVisible && styles.fadeIn
          }`}
        >
          {visibleData.map((data) => (
            <MenuCard key={data.id} data={data} />
          ))}
        </div>

        {/* Show More/Show Less Button */}
        {filteredData.length > 6 && (
          <div className="flex justify-center mt-6">
            <button
              onClick={() => setShowAll(!showAll)}
              className="text-white text-xs border font-semibold tracking-tighter uppercase border-[#ffffff43] px-6 py-2 hover:bg-[#dfcfcf09] transition duration-300"
            >
              {showAll ? "Less" : "More"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuSection;

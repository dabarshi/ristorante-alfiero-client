import { useMemo, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { DishesMenuData } from "../../data/data";
import useVisibility from "../../hooks/useVisibility";
import styles from "./MenuStyle.module.css";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("APPETISERS");
  const [cardRef, isVisible] = useVisibility();

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
  };

  return (
    <div ref={cardRef} className="py-20 bg-[#121217]">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle title={"Our Menu"} subTitle={"Healthy & Tasty"} />

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

        <div
          className={`grid grid-cols-1 md:grid-cols-2 gap-10 text-white py-8 px-12 ${
            isVisible && styles.fadeIn
          }`}
        >
          {filteredData.map((data) => (
            <MenuCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MenuSection;

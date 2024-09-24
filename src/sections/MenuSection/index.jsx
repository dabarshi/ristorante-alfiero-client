import { useMemo, useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FoodMenuData } from "../../data/data";
import useVisibility from "../../hooks/useVisibility";
import styles from "./MenuStyle.module.css";

const MenuSection = () => {
  const [activeCategory, setActiveCategory] = useState("Main");
  const [cardRef, isVisible] = useVisibility();

  const filteredData = useMemo(
    () => FoodMenuData.filter((item) => item.category === activeCategory),
    [activeCategory]
  );

  const categories = ["Main", "Starter", "Drinks"];

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };

  return (
    <div ref={cardRef} className="py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle title={"Our Menu"} subTitle={"Healthy & Tasty"} />

        <div className="flex justify-center space-x-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`${
                activeCategory === category
                  ? "border-amber-500"
                  : "border-white"
              } border text-white font-semibold w-20 py-2 px-4`}
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

import { useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FoodMenuData } from "../../data/data";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Main");
  const filteredData = FoodMenuData.filter(
    (item) => item.category === activeCategory
  );

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
  };
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto space-y-12">
        <SectionTitle title={"Our Menu"} subTitle={"Healthy & Tasty"} />

        <div className="flex justify-center space-x-4">
          <button
            onClick={() => handleCategoryChange("Main")}
            className={`${
              activeCategory === "Main"
                ? "border-amber-500 border-2"
                : "border-white border"
            } text-white font-semibold w-20 py-2 px-4`}
          >
            Main
          </button>
          <button
            onClick={() => handleCategoryChange("Starter")}
            className={`${
              activeCategory === "Starter"
                ? "border-amber-500 border-2"
                : "border-white border"
            } text-white font-semibold w-20 py-2 px-4`}
          >
            Starter
          </button>
          <button
            onClick={() => handleCategoryChange("Drinks")}
            className={`${
              activeCategory === "Drinks"
                ? "border-amber-500 border-2"
                : "border-white border"
            } text-white font-semibold w-20 py-2 px-4`}
          >
            Drinks
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white py-8 px-12">
          {filteredData.map((data) => (
            <MenuCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Menu;

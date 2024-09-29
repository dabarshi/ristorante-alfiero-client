import { ShowCaseImgs } from "../../data/data";
import FullMenuSection from "../../sections/FullMenuSection";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";
import { DishesMenuData } from "../../data/data";

const OurMenu = () => {
  const categories = [
    { title: "FISH MAIN COURSE", bgColor: "bg-[#18181d]", imgIndex: 0 },
    { title: "MEAT FIRST COURSE", bgColor: "bg-[#111]", imgIndex: 1, order: "order-2" },
    { title: "FISH SECOND COURSE", bgColor: "bg-[#18181d]", imgIndex: 2 },
    { title: "MEAT SECOND COURSE", bgColor: "bg-[#111]", imgIndex: 1, order: "order-2" },
    { title: "MEAT APPETISERS", bgColor: "bg-[#18181d]", imgIndex: 2 },
    { title: "SIDES", bgColor: "bg-[#111]", imgIndex: 1, order: "order-2" },
    { title: "DESSERTS", bgColor: "bg-[#18181d]", imgIndex: 2 },
    { title: "DRINKS", bgColor: "bg-[#111]", imgIndex: 1, order: "order-2" },
    { title: "PIZZAS", bgColor: "bg-[#18181d]", imgIndex: 2 },
  ];

  const filteredData = categories.reduce((acc, category) => {
    acc[category.title] = DishesMenuData.filter(data => data.category === category.title);
    return acc;
  }, {});

  return (
    <div>
      <SecondaryHeroSection index={0} title={"Our Menu"} subtitle={"Fresh & Delicious"} />
      
      {categories.map((category, index) => (
        <FullMenuSection
          key={index}
          customStyles={category.bgColor}
          order={category.order}
          imgSet={ShowCaseImgs[category.imgIndex]}
          title={category.title}
          subtitle={"Fresh and Delicious"}
          data={filteredData[category.title]}
        />
      ))}
    </div>
  );
};

export default OurMenu;
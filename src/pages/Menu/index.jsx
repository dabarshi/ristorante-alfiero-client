import { MenuPageSideImgs, SecondaryHeroImg } from "../../data/data";
import FullMenuSection from "../../sections/FullMenuSection";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";
import { DishesMenuData } from "../../data/data";
import useImageLoader from "../../hooks/useImageLoader";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const OurMenu = () => {
  // Combine all images to preload
  const allImages = [...MenuPageSideImgs, ...SecondaryHeroImg];

  // Use the loading state
  const loading = useImageLoader(allImages);

  const categories = [
    { title: "FISH APPETISERS", bgColor: "bg-[#18181d]", imgIndex: 0 },
    { title: "MEAT APPETISERS", bgColor: "bg-[#18181d]", imgIndex: 0 },
    {
      title: "FISH MAIN COURSE",
      bgColor: "bg-[#18181d]",
      imgIndex: 1,
      order: "order-2",
    },
    {
      title: "MEAT FIRST COURSE",
      bgColor: "bg-[#111]",
      imgIndex: 2,
    },
    {
      title: "FISH SECOND COURSE",
      bgColor: "bg-[#18181d]",
      imgIndex: 3,
      order: "order-2",
    },
    {
      title: "MEAT SECOND COURSE",
      bgColor: "bg-[#111]",
      imgIndex: 4,
    },
    { title: "SIDES", bgColor: "bg-[#111]", imgIndex: 5, order: "order-2" },
    { title: "DESSERTS", bgColor: "bg-[#18181d]", imgIndex: 6 },
    { title: "DRINKS", bgColor: "bg-[#111]", imgIndex: 7, order: "order-2" },
    { title: "PIZZAS", bgColor: "bg-[#18181d]", imgIndex: 8 },
  ];

  const filteredData = categories.reduce((acc, category) => {
    acc[category.title] = DishesMenuData.filter(
      (data) => data.category === category.title
    );
    return acc;
  }, {});

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondaryHeroSection
            index={0}
            title={"Our Menu"}
            subtitle={"Fresh & Delicious"}
            SecondaryHeroImg={SecondaryHeroImg}
          />
          {categories.map((category, index) => (
            <FullMenuSection
              key={index}
              customStyles={category.bgColor}
              order={category.order}
              imgSet={MenuPageSideImgs[category.imgIndex]}
              title={category.title}
              subtitle={"Fresh and Delicious"}
              data={filteredData[category.title]}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default OurMenu;

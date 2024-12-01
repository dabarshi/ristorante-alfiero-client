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
    {
      title: "FISH APPETISERS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 0,
    },
    {
      title: "MEAT APPETISERS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 1,
    },
    {
      title: "FISH MAIN COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 2,
    },
    {
      title: "MEAT FIRST COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 3,
    },
    {
      title: "FISH SECOND COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 4,
    },
    {
      title: "MEAT SECOND COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 5,
    },
    {
      title: "SIDES",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 6,
    },
    {
      title: "DESSERTS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 7,
    },
    {
      title: "DRINKS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 8,
    },
    {
      title: "PIZZAS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 9,
    },
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
              customStyles={category.bgTitle}
              contentStyles={category.bgContent}
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

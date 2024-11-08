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
      //   bgColor: "bg-[#18181d]",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 0,
    },
    {
      title: "MEAT APPETISERS",
      //   bgColor: "bg-[#18181d]",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 0,
    },
    {
      title: "FISH MAIN COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 1,
      order: "order-2",
    },
    {
      title: "MEAT FIRST COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 2,
    },
    {
      title: "FISH SECOND COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 3,
      order: "order-2",
    },
    {
      title: "MEAT SECOND COURSE",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 4,
    },
    {
      title: "SIDES",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 5,
      order: "order-2",
    },
    {
      title: "DESSERTS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 6,
    },
    {
      title: "DRINKS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 7,
      order: "order-2",
    },
    {
      title: "PIZZAS",
      bgTitle: "bg-[#18181d]",
      bgContent: "bg-[#111]",
      imgIndex: 8,
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

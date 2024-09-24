import { ShowCaseImgs } from "../../data/data";
import FullMenuSection from "../../sections/FullMenuSection";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const OurMenu = () => {
  return (
    <div>
      <SecondaryHeroSection title={"Our Menu"} subtitle={"Fresh & Delicious"} />
      {/* Main Menu Section  */}
      <FullMenuSection
        customStyles={"bg-[#2F2F2F]"}
        imgSet={ShowCaseImgs[0]}
        title={"Mains"}
        subtitle={"Fresh and Delicious"}
        data={""}
      />
      {/* Starter Menu Section  */}
      <FullMenuSection
        customStyles={"bg-black"}
        order={"order-2"}
        imgSet={ShowCaseImgs[1]}
        title={"Starters"}
        subtitle={"Fresh and Delicious"}
        data={""}
      />
      {/* Drinks Menu Section  */}
      <FullMenuSection
        customStyles={"bg-[#2F2F2F]"}
        imgSet={ShowCaseImgs[2]}
        title={"Drinks"}
        subtitle={"Fresh and Delicious"}
        data={""}
      />
    </div>
  );
};

export default OurMenu;

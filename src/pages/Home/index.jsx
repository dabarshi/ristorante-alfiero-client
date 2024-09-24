import { heroImg } from "../../data/data";
import Featured from "../../sections/Featured";
import MainHeroSection from "../../sections/MainHeroSection";
import MenuSection from "../../sections/MenuSection";
import Testimonial from "../../sections/Testimonial";
import TodaySpecial from "../../sections/TodaySpecial";
import WelcomSection from "../../sections/Welcome";

const Home = () => {
  return (
    <div className="bg-black">
      <MainHeroSection slides={heroImg} />
      <Featured />
      <WelcomSection />
      <TodaySpecial />
      <MenuSection />
      <Testimonial />
    </div>
  );
};

export default Home;

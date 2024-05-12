import { heroImg } from "../../data/data";
import Featured from "../../sections/Featured";
import Hero from "../../sections/Hero";
import Menu from "../../sections/Menu";
import Testimonial from "../../sections/Testimonial";
import TodaySpecial from "../../sections/TodaySpecial";
import WelcomSection from "../../sections/Welcome";

const Home = () => {
  return (
    <div className="bg-black">
      <div>
        <Hero slides={heroImg} />
      </div>
      <Featured />
      <WelcomSection />
      <TodaySpecial />
      <Menu />
      <Testimonial />
    </div>
  );
};

export default Home;

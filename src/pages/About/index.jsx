// import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import ChefCard from "../../components/ChefCard/ChefCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import { ChefData, WelcomeCardData } from "../../data/data";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const About = () => {
  return (
    <div>
      <SecondaryHeroSection
        index={1}
        title={"About Us"}
        subtitle={"Fresh & Delicious"}
      />
      <WelcomeCard data={WelcomeCardData[0]} />
      <WelcomeCard data={WelcomeCardData[1]} change={true} />
      <div className="bg-[#121217]">
        <div className="py-20">
          <SectionTitle title={"Meet"} subTitle={"Our Team"} />
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:px-12 lg:px-20">
          {ChefData.map((data) => (
            <ChefCard data={data} />
            // <FeaturedCard data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;

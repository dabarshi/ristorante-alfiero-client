// import ChefCard from "../../components/ChefCard/ChefCard";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
// import SectionTitle from "../../components/SectionTitle/SectionTitle";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import { SecondaryHeroImg, WelcomeCardData } from "../../data/data";
import useImageLoader from "../../hooks/useImageLoader";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const About = () => {
  // Combine all images to preload
  const allImages = [...WelcomeCardData, ...SecondaryHeroImg];

  // Use the loading state
  const loading = useImageLoader(allImages);
  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondaryHeroSection
            index={1}
            title={"About Us"}
            subtitle={"Fresh & Delicious"}
            SecondaryHeroImg={SecondaryHeroImg}
          />
          <WelcomeCard data={WelcomeCardData[0]} />
          <WelcomeCard data={WelcomeCardData[1]} change={true} />
          {/* <div className="bg-[#121217]">
            <div className="py-20">
              <SectionTitle title={"Meet"} subTitle={"Our Team"} />
            </div>
            <div className="grid md:grid-cols-3 gap-5 md:px-12 lg:px-20">
              {ChefData.map((data) => (
                <ChefCard data={data} />
              ))}
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default About;

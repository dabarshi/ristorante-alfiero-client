import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
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
        </>
      )}
    </div>
  );
};

export default About;

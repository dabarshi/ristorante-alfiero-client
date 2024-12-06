import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import OfferCard from "../../components/OfferCard/OfferCard";
import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import {
  FeaturedCardData,
  FoodCardData,
  heroImg,
  WelcomeCardData,
} from "../../data/data";
import useImageLoader from "../../hooks/useImageLoader";
import Featured from "../../sections/Featured";
import MainHeroSection from "../../sections/MainHeroSection";
import MenuSection from "../../sections/MenuSection";
import TodaySpecial from "../../sections/TodaySpecial";
import axiosInstance from "../../api/axiosInstance";
import SpecialOfferCard from "../../components/SpecialOfferCard/SpecialOfferCard";

const Home = () => {
  const bgTodaySpecial = "https://i.ibb.co.com/tzx9V0j/11.webp";

  // State for offer data
  const [offer, setOffer] = useState(null);
  const [error, setError] = useState("");

  // Combine all images to preload
  const allImages = [...heroImg, { img: bgTodaySpecial, alt: "Background" }];

  // Use the loading state
  const loading = useImageLoader(allImages);

  // Fetch offer data
  useEffect(() => {
    const fetchOffer = async () => {
      try {
        const response = await axiosInstance.get("/offer");
        setOffer(response.data.offer);
      } catch (err) {
        console.error("Error fetching offer data:", err);
        setError("Failed to load offer.");
      }
    };

    fetchOffer();
  }, []);

  return (
    <div className="bg-black">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="relative">
            <MainHeroSection slides={heroImg} />
            <OfferCard offer={offer} error={error} />
            <SpecialOfferCard />
            <Featured FeaturedCardData={FeaturedCardData} />
            <WelcomeCard data={WelcomeCardData[0]} isHome={true} />
            <TodaySpecial
              FoodCardData={FoodCardData}
              backgroundImageUrl={bgTodaySpecial}
            />
            <MenuSection />
          </div>
        </>
      )}
    </div>
  );
};

export default Home;

import { useState, useEffect } from "react";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
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
import SpecialOfferCard from "../../components/SpecialOfferCard/SpecialOfferCard";

const Home = () => {
  const bgTodaySpecial = "https://i.ibb.co.com/tzx9V0j/11.webp";

  // Combine all images to preload
  const allImages = [...heroImg, { img: bgTodaySpecial, alt: "Background" }];

  // Use the loading state
  const loading = useImageLoader(allImages);

  return (
    <div className="bg-black">
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="relative">
            <MainHeroSection slides={heroImg} />
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

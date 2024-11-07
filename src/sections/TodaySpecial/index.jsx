import FoodCard from "../../components/FoodCard/FoodCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
// import { FoodCardData } from "../../data/data";
import useVisibility from "../../hooks/useVisibility";
import styles from "./TodaySpecilStyle.module.css";
// import backgroundImageUrl from "../../assets/backgrounds/11.jpg";

const TodaySpecial = ({ FoodCardData, backgroundImageUrl }) => {
  const [cardRef, isVisible] = useVisibility();

  return (
    <div
      ref={cardRef}
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="py-28 px-2 space-y-12 bg-black bg-opacity-80">
        <SectionTitle
          title={"Today's Speacial"}
          subTitle={" Fresh & delicious"}
        />
        <div
          className={`flex flex-col md:flex-row max-w-7xl mx-auto gap-10 ${
            isVisible && styles.slideUpAnimation
          }`}
        >
          {FoodCardData.map((data) => (
            <FoodCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;

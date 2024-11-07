import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { TestimonialData } from "../../data/data";
import useVisibility from "../../hooks/useVisibility";
import styles from "./TestimonialStyle.module.css";
// import backgroundImageUrl from "../../assets/backgrounds/32.jpg";

const Testimonial = ({backgroundImageUrl}) => {

  const [cardRef, isVisible] = useVisibility();

  return (
    <div
      ref={cardRef}
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="py-28 px-2 space-y-12 bg-black bg-opacity-70">
        <SectionTitle title={"Testimonials"} subTitle={" Fresh & delicious"} />
        <div
          className={`flex flex-col md:flex-row max-w-7xl mx-auto gap-10 ${
            isVisible && styles.fadeIn
          }`}
        >
          {TestimonialData.map((data) => (
            <TestimonialCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

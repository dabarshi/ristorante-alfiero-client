import SectionTitle from "../../components/SectionTitle/SectionTitle";
import TestimonialCard from "../../components/TestimonialCard/TestimonialCard";
import { TestimonialData } from "../../data/data";
import useVisibility from "../../hooks/useVisibility";
import styles from "./TestimonialStyle.module.css";

const Testimonial = () => {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1623848932096-b196440bb57b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [cardRef, isVisible] = useVisibility();

  return (
    <div
      ref={cardRef}
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="py-28 px-2 space-y-12 bg-black bg-opacity-80">
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

import styles from "./WelcomeCardStyle.module.css";
import useVisibility from "../../hooks/useVisibility";

const WelcomeCard = ({ data }) => {
  const { img, alt, title, subTitle, description } = data;
  const [cardRef, isVisible] = useVisibility();

  return (
    <div ref={cardRef} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white place-items-center gap-10 bg-[#2F2F2F]">
        <div>
          <img
            className={`${isVisible ? styles.imgAnimation : ""}`}
            src={img}
            alt={alt}
          />
        </div>
        <div
          className={`space-y-8 p-12 md:p-20 ${
            isVisible ? styles.slideUpAnimation : ""
          }`}
        >
          <div className="space-y-6">
            <h2 className="font-semibold text-3xl">{title}</h2>
            <h4 className="text-amber-400 font-['dancing_script'] tracking-[0.2em]">
              {subTitle}
            </h4>
          </div>
          <hr className="w-8 border-amber-600" />
          <p className="text-justify font-thin text-[#f1f1f1bb]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;

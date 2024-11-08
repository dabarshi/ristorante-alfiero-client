import styles from "./WelcomeCardStyle.module.css";
import useVisibility from "../../hooks/useVisibility";
import TransparentLogo from "../../assets/logo/transparentLogo.png";
import { Link } from "react-router-dom";
// import { useState } from "react";

const WelcomeCard = ({ data, change, isHome }) => {
  const { img, alt, title, subTitle, description, description2, description3 } =
    data;
  const [cardRef, isVisible] = useVisibility();
  // const [order, setOrder] = useState(change);

  return (
    <div ref={cardRef} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white place-items-center bg-[#18181d]">
        <img
          className={`w-full h-full object-cover ${
            isVisible
              ? change
                ? styles.welcomeCardText
                : styles.welcomeCardImg
              : ""
          } ${change ? "lg:order-2" : ""}`}
          src={img}
          alt={alt}
        />
        <div
          className={`space-y-8 px-6 py-12 md:px-20 ${
            change ? "lg:pl-36" : ""
          } ${
            isVisible
              ? change
                ? styles.welcomeCardImg
                : styles.welcomeCardText
              : ""
          }`}
        >
          <div className="space-y-6">
            <div className="bg-white bg-opacity-90 rounded-full w-40">
              <img className="drop-shadow-2xl" src={TransparentLogo} alt="" />
            </div>
            <h2 className="font-semibold text-3xl">{title}</h2>
            <h4 className="text-amber-400 font-['dancing_script'] tracking-[0.2em]">
              {subTitle}
            </h4>
          </div>
          <hr className="w-8 border-amber-600" />
          <p className="text-justify font-thin text-[#f1f1f1bb]">
            {description}
          </p>
          <p className="text-justify font-thin text-[#f1f1f1bb]">
            {description2 ? description2 : null}
          </p>
          <p className="text-justify font-thin text-[#f1f1f1bb]">
            {description3 ? description3 : null}
          </p>
          {isHome ? (
            <p className="hover:underline text-xs text-[#f1f1f1bb] hover:text-white font-bold">
              <Link className="pb-1" to="/about">
                More About Us ...
              </Link>
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;

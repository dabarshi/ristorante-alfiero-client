import styles from "./HeroSubtitleStyle.module.css";

const SecondaryHeroSection = ({ title, subtitle, index, SecondaryHeroImg }) => {
  const heroImg = SecondaryHeroImg[index];
  return (
    <div
      className={`relative h-96 bg-cover bg-center bg-fixed`}
      style={{ backgroundImage: `url(${heroImg.img})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative h-full flex flex-col justify-center items-center text-white">
        <h1 className="text-4xl font-bold">{title}</h1>
        <h2 className={`text-2xl ${styles.subtitle}`}>{subtitle}</h2>
      </div>
    </div>
  );
};

export default SecondaryHeroSection;

import WelcomeCard from "../../components/WelcomeCard/WelcomeCard";
import { WelcomeCardData } from "../../data/data";

const WelcomSection = () => {
  return (
    <div>
      <WelcomeCard data={WelcomeCardData[0]} />
    </div>
  );
};

export default WelcomSection;

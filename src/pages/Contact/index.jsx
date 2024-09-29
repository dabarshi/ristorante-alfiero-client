import { useState } from "react";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const Contact = () => {
  const [index, setIndex] = useState(0);
  const tabs = ["SEND US MESSAGE", "OUR ADDRESS", "VIEW MAP"]
  return (
    <div>
      <SecondaryHeroSection
        index={4}
        title={"Contact Us"}
        subtitle={"Who We Are"}
      />
      <div className="bg-[#121217]">
        <div></div>
      </div>
    </div>
  );
};

export default Contact;

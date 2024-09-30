import { useState } from "react";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import OurAddress from "../../components/OurAddress/OurAddress";
import GoogleMapComponent from "../../components/GoogleMapComponent/GoogleMapComponent";

const Contact = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["SEND US MESSAGE", "OUR ADDRESS", "VIEW MAP"];
  const handleTab = (activeIndex) => {
    setTabIndex(activeIndex);
  };
  const map =
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div>
      <SecondaryHeroSection
        index={4}
        title={"Contact Us"}
        subtitle={"Who We Are"}
      />
      <div
        className="py-20"
        style={{
          backgroundImage: `url(${map})`,
        }}
      >
        <div className="max-w-2xl min-h-96 mx-auto">
          <div className="relative">
            {/* tabs */}
            <div className="absolute top-0 left-0">
              <div className="flex">
                {tabs.map((tab, index) => (
                  <div
                    key={index}
                    onClick={() => handleTab(index)}
                    className={`${
                      tabIndex === index ? "bg-[#ca8e46]" : "bg-[#0003]"
                    }`}
                  >
                    <button className="text-white font-semibold text-sm px-4 py-3 border-r-[1px] border-r-[#ffffff0b]">
                      {tab}
                    </button>
                  </div>
                ))}
              </div>
            </div>
            {/* content */}
            <div className="text-white">
              {tabIndex === 0 && (
                <div>
                  <ContactForm />
                </div>
              )}
              {tabIndex === 1 && (
                <div>
                  <OurAddress />
                </div>
              )}
              {tabIndex === 2 && (
                <div>
                  <GoogleMapComponent />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

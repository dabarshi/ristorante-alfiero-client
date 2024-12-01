import { useState } from "react";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";
import ContactForm from "../../components/ContactForm/ContactForm";
import OurAddress from "../../components/OurAddress/OurAddress";
import GoogleMapComponent from "../../components/GoogleMapComponent/GoogleMapComponent";
import { SecondaryHeroImg } from "../../data/data";
import useImageLoader from "../../hooks/useImageLoader";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

const Contact = () => {
  const map =
    "https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // Combine all images to preload
  const allImages = [...SecondaryHeroImg, { img: map, alt: "Background" }];

  // Use the loading state
  const loading = useImageLoader(allImages);

  const [tabIndex, setTabIndex] = useState(0);
  const tabs = ["SEND US MESSAGE", "OUR ADDRESS", "VIEW MAP"];
  const handleTab = (activeIndex) => {
    setTabIndex(activeIndex);
  };

  return (
    <div>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <SecondaryHeroSection
            index={4}
            title={"Contact Us"}
            subtitle={"Who We Are"}
            SecondaryHeroImg={SecondaryHeroImg}
          />
          <div
            className="relative py-20"
          >
            {/* Embed Google Map as Background */}
            <div className="w-full absolute inset-0">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d185.58234707502015!2d12.497291229907!3d41.90753178385991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x132f61083926a63f%3A0xe40733b4e9ef6c2b!2sVia%20Servio%20Tullio%2C%209%2C%2000187%20Roma%20RM%2C%20Italien!5e0!3m2!1sde!2sde!4v1730472299536!5m2!1sde!2sde"
                width="100%"
                height="100%"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
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
                        <button className="text-white font-medium md:font-semibold text-xs md:text-smd px-4 py-3 border-r-[1px] border-r-[#ffffff0b]">
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
        </>
      )}
    </div>
  );
};

export default Contact;

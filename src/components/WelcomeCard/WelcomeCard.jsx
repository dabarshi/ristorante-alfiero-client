import styles from "./WelcomeCardStyle.module.css";
import useVisibility from "../../hooks/useVisibility";
// import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";

const WelcomeCard = ({ data }) => {
  const { img, alt, title, subTitle, description } = data;
  const [cardRef, isVisible] = useVisibility();

  // const workingHoursData = [
  //   {
  //     day: "Monday - Saturday",
  //     time: {
  //       period1: "12:30 PM - 3:00 PM",
  //       period2: "7:00 PM - 11:00 PM",
  //     },
  //   },
  //   {
  //     day: "Sunday",
  //     time: {
  //       period1: "12:30 PM - 3:00 PM",
  //     },
  //   },
  // ];
  // const addressData = [
  //   {
  //     title: "street",
  //     icon: <FaLocationDot />,
  //     text: "Silk St, Barbican, London EC2Y 8DS, UK",
  //   },
  //   {
  //     title: "phone",
  //     icon: <FaPhone />,
  //     text: "+39-055-123456",
  //   },
  //   {
  //     title: "mail",
  //     icon: <FaEnvelope />,
  //     text: "booking@patiotime.com",
  //   },
  // ];

  // const WorkingHous = ({ day, hour }) => {
  //   return (
  //     <div className="grid grid-cols-2">
  //       <p className="text-sm">{day}</p>
  //       <div>
  //         <p className="text-sm">{hour?.period1}</p>
  //         <p className="text-sm">{hour?.period2}</p>
  //       </div>
  //     </div>
  //   );
  // };

  // const OurAddress = ({ icon, text }) => {
  //   return (
  //     <p className="flex items-center gap-1 text-sm">
  //       <span>{icon}</span>
  //       {text}
  //     </p>
  //   );
  // };

  return (
    <div ref={cardRef} className="overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 text-white place-items-center gap-10 bg-[#18181d]">
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

          {/* location & working hours */}

          {/* <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col justify-between space-y-5">
              <h3 className="text-lg uppercase font-medium">Working Hours</h3>
              <div className="space-y-5">
                {workingHoursData.map((data) => (
                  <WorkingHous key={data.day} day={data.day} hour={data.time} />
                ))}
              </div>
            </div>
            <div className="space-y-5">
              <h3 className="text-lg uppercase font-medium">Our Address</h3>
              {addressData.map((data) => (
                <OurAddress
                  key={data.title}
                  icon={data.icon}
                  text={data.text}
                />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;

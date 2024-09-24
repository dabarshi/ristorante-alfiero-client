import {
  Facebook,
  Gmail,
  Instagram,
  LinkedIn,
} from "../../assets/icons/socialIcon";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";

const Footer = () => {
  const socialLinksData = [
    {
      id: 1,
      to: "/",
      icon: <Facebook />,
    },
    {
      id: 2,
      to: "/",
      icon: <Instagram />,
    },
    {
      id: 3,
      to: "/",
      icon: <LinkedIn />,
    },
    {
      id: 4,
      to: "/",
      icon: <Gmail />,
    },
  ];

  const workingHoursData = [
    {
      day: "Monday - Saturday",
      time: {
        period1: "12:30 PM - 3:00 PM",
        period2: "7:00 PM - 11:00 PM",
      },
    },
    {
      day: "Sunday",
      time: {
        period1: "12:30 PM - 3:00 PM",
      },
    },
  ];
  const addressData = [
    {
      title: "street",
      icon: <FaLocationDot />,
      text: "Silk St, Barbican, London EC2Y 8DS, UK",
    },
    {
      title: "phone",
      icon: <FaPhone />,
      text: "+39-055-123456",
    },
    {
      title: "mail",
      icon: <FaEnvelope />,
      text: "booking@patiotime.com",
    },
  ];
  const SocialLinks = ({ icon, to }) => {
    return (
      <div>
        <Link to={to}>{icon}</Link>
      </div>
    );
  };

  const WorkingHous = ({ day, hour }) => {
    return (
      <div className="grid grid-cols-2">
        <p className="text-sm">{day}</p>
        <div>
          <p className="text-sm">{hour?.period1}</p>
          <p className="text-sm">{hour?.period2}</p>
        </div>
      </div>
    );
  };

  const OurAddress = ({ icon, text }) => {
    return (
      <p className="flex items-center gap-1 text-sm">
        <span>{icon}</span>
        {text}
      </p>
    );
  };

  return (
    <footer className="py-10 text-white bg-[#121217]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 py-10 px-6">
          <div className="flex flex-col justify-between space-y-5">
            <h1 className="text-3xl">Ristorante Alfiero</h1>
            <p className="text-sm text-justify">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Necessitatibus, architecto cum corrupti accusantium ipsa
            </p>
            {/* links */}
            <div className="flex gap-5">
              {socialLinksData.map((data) => (
                <SocialLinks key={data.id} to={data.to} icon={data.icon} />
              ))}
            </div>
          </div>
          {/* Working Hours */}
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
              <OurAddress key={data.title} icon={data.icon} text={data.text} />
            ))}
          </div>
        </div>
        <hr className="border border-[#44444474]" />
        <div className="text-center py-4 text-sm">
          <p>Developed by Dabarshi Roy</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

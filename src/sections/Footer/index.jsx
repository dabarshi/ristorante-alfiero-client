import {
  Facebook,
  Gmail,
  Instagram,
  LinkedIn,
  Tiktok,
} from "../../assets/icons/socialIcon";
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import Container from "../../components/Container/Container";
import { Link } from "react-router-dom";
import TransparentLogo from "../../assets/logo/transparentLogo.png";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  const socialLinksData = [
    {
      id: 1,
      to: "https://www.facebook.com/share/1BRH4NQPwA/?mibextid=LQQJ4d",
      icon: <Facebook />,
    },
    {
      id: 2,
      to: "https://www.instagram.com/ristorantealfiero/profilecard/?igsh=aXNhdmpsemp4ZW5r ",
      icon: <Instagram />,
    },
    {
      id: 3,
      to: "mailto:ristorantealfiero9@gmail.com",
      icon: <Gmail />,
    },
    {
      id: 4,
      to: "/",
      icon: <Tiktok />,
    },
  ];

  const workingHoursData = [
    {
      day: "Tuseday - Sunday",
      time: {
        period1: "12:30 PM - 11:00 PM",
      },
    },
    {
      day: "Monday",
      time: {
        period1: "OFF",
      },
    },
  ];
  const addressData = [
    {
      title: "street",
      icon: <FaLocationDot />,
      text: "Via Servio Tullio, 9, 00187 Roma",
    },
    {
      title: "phone",
      icon: <FaPhone />,
      text: "+39-06-85357856",
    },
    {
      title: "mail",
      icon: <FaEnvelope />,
      text: "ristorantealfiero9@gmail.com",
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
      <p className="flex items-center gap-5 text-sm">
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
            {/* <h1 className="text-3xl">Ristorante Alfiero</h1> */}
            <div className="w-24 bg-white bg-opacity-90 rounded-full">
              <img
                className="object-cover w-full"
                src={TransparentLogo}
                alt=""
              />
            </div>
            <p className="text-sm text-justify">
              Join us at Ristorante Alfiero and let us share the magic of
              Italian dining with you.
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
          <div className="flex flex-col justify-between space-y-5">
            <h3 className="text-lg uppercase font-medium">Our Address</h3>
            <div className="space-y-5">
              {addressData.map((data) => (
                <OurAddress
                  key={data.title}
                  icon={data.icon}
                  text={data.text}
                />
              ))}
            </div>
          </div>
        </div>
        <hr className="border border-[#44444474]" />
        <div className="text-center py-4 text-sm">
          <p>
            Copyright © {currentYear} Ristorante Alfiero. All rights reserved.
          </p>
          {/* <p>
            Developed by @{" "}
            <span className="font-bold text-amber-700">
              <Link
                title="https://dabarshi-roy-portfolio.web.app/"
                to={"https://dabarshi-roy-portfolio.web.app/"}
              >
                Dabarshi Roy
              </Link>
            </span>
          </p> */}
        </div>
      </Container>
    </footer>
  );
};

export default Footer;

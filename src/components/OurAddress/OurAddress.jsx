import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import {
  Facebook,
  Gmail,
  Instagram,
  LinkedIn,
  Tiktok,
} from "../../assets/icons/socialIcon";
import { Link } from "react-router-dom";

const OurAddress = () => {
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
    {
      id: 5,
      to: "/",
      icon: <Tiktok />,
    },
  ];

  const SocialLinks = ({ icon, to }) => {
    return (
      <div>
        <Link to={to}>{icon}</Link>
      </div>
    );
  };

  return (
    <div className="bg-[#121217] px-2 py-20 space-y-4 md:px-20">
      <div className="max-w-md bg-[#000] rounded shadow-sm mx-auto p-4">
        <div className="flex items-center mb-4 pb-2 border-b-[1px] border-b-[#fff2]">
          <FiMapPin className="text-[#ca8e46] text-xl mr-8" />
          <div>
            <h3 className="text-lg font-bold">Address</h3>
            <p>123 Street Name, City, Country</p>
          </div>
        </div>

        <div className="flex items-center mb-4 pb-2 border-b-[1px] border-b-[#fff2]">
          <FiPhone className="text-[#ca8e46] text-xl mr-8" />
          <div>
            <h3 className="text-lg font-bold">Phone</h3>
            <p>+123-456-7890</p>
          </div>
        </div>

        <div className="flex items-center mb-4">
          <FiMail className="text-[#ca8e46] text-xl mr-8" />
          <div>
            <h3 className="text-lg font-bold">Email</h3>
            <p>info@example.com</p>
          </div>
        </div>
      </div>
      <div className="max-w-md flex items-center justify-evenly bg-[#000] rounded shadow-sm mx-auto p-4">
        <h4 className="text-lg font-bold">Follow Us : </h4>
        <div className="flex gap-5">
          {socialLinksData.map((data) => (
            <SocialLinks key={data.id} to={data.to} icon={data.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurAddress;

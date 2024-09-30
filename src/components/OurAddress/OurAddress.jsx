import React from "react";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";

const OurAddress = () => {
  return (
    <div className="bg-[#121217] p-20">
      <div className="max-w-md bg-[#000] rounded shadow-sm mx-auto p-4">
        {/* <div className="bg-[#121217] p-20"></div> */}
        {/* <h2 className="text-2xl font-bold mb-4">Our Address</h2> */}

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
    </div>
  );
};

export default OurAddress;

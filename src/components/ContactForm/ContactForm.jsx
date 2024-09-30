import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // You can add form submission logic here (e.g., API call)
  };

  return (
    <div className="bg-[#121217] p-20">
      <div>
        <form
          onSubmit={handleSubmit}
          className="px-8 pt-6 pb-8 mb-4 bg-[#0006] rounded shadow-sm"
        >
          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Your Name
            </label> */}
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Your Email
            </label> */}
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phone"
            >
              Your Phone
            </label> */}
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Phone"
            />
          </div>

          <div className="mb-4">
            {/* <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Your Message
            </label> */}
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#ca8e46] hover:bg-[#ca8f46d0] text-white font-bold py-2 px-4 focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

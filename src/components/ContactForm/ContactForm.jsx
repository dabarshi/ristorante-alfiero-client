import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axiosInstance.post("/contact", formData);
      Swal.fire({
        title: "Thank You",
        text: "Message Sent Successful",
        icon: "success",
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-[#121217] px-2 py-20 md:px-20">
      <div>
        <form
          onSubmit={handleSubmit}
          className="px-8 pt-6 pb-8 mb-4 bg-[#0006] rounded shadow-sm"
        >
          <div className="mb-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Phone"
              required
            />
          </div>

          <div className="mb-4">
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow bg-transparent appearance-none border border-[#ffffff0f] w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
              required
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-[#ca8e46] hover:bg-[#ca8f46d0] text-white font-medium md:font-semibold py-2 px-4 focus:outline-none focus:shadow-outline"
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

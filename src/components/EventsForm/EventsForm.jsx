import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";

const EventsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfPeople: "",
    menuRequirements: "",
    date: "",
    time: "",
    contactInfo: "",
    email: "",
    occasion: "",
    specialRequirements: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);

    try {
      const response = await axiosInstance.post("/events", formData);
      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          title: "Thank You",
          text: "We will confirm the reservation through E-mail",
          icon: "success",
        });
        setFormData({
          name: "",
          numberOfPeople: "",
          menuRequirements: "",
          date: "",
          time: "",
          contactInfo: "",
          email: "",
          occasion: "",
          specialRequirements: "",
        });
      }
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      alert("An error occurred while submitting your booking.");
    }
  };

  return (
    <div className="relative">
      <div className="items-center">
        <form
          onSubmit={handleSubmit}
          className="max-w-2xl mx-auto p-6 bg-black shadow-lg rounded px-12"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white mb-1 text-center">
            Book Events
          </h2>
          <div className="bg-amber-500 h-[1px] w-32 mx-auto mb-8"></div>

          {/* Name Field */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>

          {/* Occasion */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Occasion
            </label>
            <input
              type="text"
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white rounded-lg focus:outline-none"
              placeholder="Enter the occasion (e.g., Birthday, Wedding)"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              placeholder="Enter a valid email address"
              required
            />
          </div>

          {/* Number of People */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Number of People
            </label>
            <input
              type="number"
              name="numberOfPeople"
              value={formData.numberOfPeople}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>

          {/* Menu Requirements */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Menu Requirements
            </label>
            <textarea
              name="menuRequirements"
              value={formData.menuRequirements}
              onChange={handleChange}
              className="w-full px-4 py-2 border-[1px] bg-[#ffffff0b] border-[#ffffff13] text-white rounded-lg focus:outline-none"
              placeholder="Any dietary or special menu requests?"
              rows="3"
            />
          </div>

          {/* Date */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] text-white border-[1px] border-[#ffffff13] rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Time */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] text-white border-[1px] border-[#ffffff13] rounded-lg focus:outline-none"
              required
            />
          </div>

          {/* Contact Information */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Contact Information
            </label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white rounded-lg focus:outline-none"
              placeholder="Phone number"
              required
            />
          </div>

          {/* Special Requirements */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Special Requirements
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white rounded-lg focus:outline-none"
              placeholder="Any other special requests?"
              rows="3"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-amber-700 font-bold text-white rounded-lg hover:bg-amber-600 transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EventsForm;

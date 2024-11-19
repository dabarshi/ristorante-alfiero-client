import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const EventsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    numberOfPeople: "",
    menuRequirements: "",
    dateTime: "",
    contactInfo: "",
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
      const response = await axiosInstance.post("/events", formData); // Use axiosInstance to make the POST request
      if (response.status === 200 || response.status === 201) {
        alert("Booking submitted successfully!");
        setFormData({
          name: "",
          numberOfPeople: "",
          menuRequirements: "",
          dateTime: "",
          contactInfo: "",
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
      <div className="items-center py-20">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-6 bg-black shadow-lg rounded-lg px-12 bg-opacity-90"
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

          {/* Date and Time */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Date & Time
            </label>
            <input
              type="datetime-local"
              name="dateTime"
              value={formData.dateTime}
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
              placeholder="Email or phone number"
              required
            />
          </div>

          {/* Occasion */}
          <div className="mb-4">
            <label className="block text-white text-sm font-medium mb-2">
              Occasion
            </label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white rounded-lg focus:outline-none"
            >
              <option value="">Select an Occasion</option>
              <option value="Birthday">Birthday</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Event">Corporate Event</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
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

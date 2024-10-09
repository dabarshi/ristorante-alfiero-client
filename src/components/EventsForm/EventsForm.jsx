import React, { useState } from "react";

const EventsForm = () => {
  const formBgImg =
    "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  const [formData, setFormData] = useState({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    // Add your submission logic here
  };

  return (
    <div
      className="relative min-h-screen bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${formBgImg})`, // Replace with your image URL
      }}
    >
      <div className="bg-black bg-opacity-50 min-h-screen items-center py-20">
        <form
          onSubmit={handleSubmit}
          className="max-w-xl mx-auto p-6 bg-black shadow-lg rounded-lg px-12 bg-opacity-90"
        >
          <h2 className="text-2xl font-bold tracking-tighter text-white mb-1 text-center">
            Book Events
          </h2>
          <div className="bg-amber-500 h-[1px] w-32 mx-auto mb-8"></div>

          {/* Number of People */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
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
            <label className="block text-white font-semibold mb-2">
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
            <label className="block text-white font-semibold mb-2">
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
            <label className="block text-white font-semibold mb-2">
              Contact Information
            </label>
            <input
              type="text"
              name="contactInfo"
              value={formData.contactInfo}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white  rounded-lg focus:outline-none"
              placeholder="Email or phone number"
              required
            />
          </div>

          {/* Occasion */}
          <div className="mb-4">
            <label className="block text-white font-semibold mb-2">
              Occasion
            </label>
            <select
              name="occasion"
              value={formData.occasion}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white  rounded-lg focus:outline-none"
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
            <label className="block text-white font-semibold mb-2">
              Special Requirements
            </label>
            <textarea
              name="specialRequirements"
              value={formData.specialRequirements}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] border-[1px] border-[#ffffff13] text-white  rounded-lg focus:outline-none"
              placeholder="Any other special requests?"
              rows="3"
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className=" px-6 py-2 bg-amber-700 font-bold text-white rounded-lg hover:bg-amber-600 transition duration-300"
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

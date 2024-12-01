import React, { useState } from "react";
import axiosInstance from "../../api/axiosInstance";
import Swal from "sweetalert2";

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    time: "",
    date: "",
    person: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    try {
      // Send the POST request using the Axios instance
      const response = await axiosInstance.post("/bookings", formData);
      if (response.status === 200 || response.status === 201) {
        // alert("Booking submitted successfully!");
        Swal.fire({
          title: "Thank You",
          text: "We will confirm the reservation through E-mail",
          icon: "success",
        });
        // Reset the form after successful submission
        setFormData({
          name: "",
          time: "",
          date: "",
          person: "",
          phone: "",
          email: "",
          message: "",
        });
      }
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
      alert("Failed to submit the booking. Please try again.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-[#000] shadow-2xl rounded">
      <h2 className="text-2xl font-semibold tracking-tighter text-white mb-2 text-center">
        Book a Table
      </h2>
      <div className="bg-amber-600 w-32 h-[1px] mx-auto mb-12"></div>
      <form onSubmit={handleSubmit} className="space-y-4 md:px-12">
        <div className="grid md:grid-cols-2 gap-5">
          {/* Name Field */}
          <div>
            <label className="block text-sm text-white mb-2 font-medium">
              Your Name
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>
          {/* Time Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">
              Time
            </label>
            <input
              type="time"
              name="time"
              value={formData.time}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Date Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">
              Date
            </label>
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>
          {/* Person Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">
              Number of Persons
            </label>
            <input
              type="number"
              name="person"
              value={formData.person}
              onChange={handleChange}
              placeholder="Number of persons"
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {/* Phone Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm font-medium mb-2 text-white">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
              required
            />
          </div>
        </div>

        {/* Message Field */}
        <div>
          <label className="block text-sm font-medium mb-2 text-white">
            Your Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message (optional)"
            className="w-full px-4 py-2 bg-[#ffffff0b] rounded border-[1px] border-[#ffffff13] text-white focus:outline-none"
            rows="4"
          />
        </div>

        {/* Submit Button */}
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
  );
};

export default BookingForm;

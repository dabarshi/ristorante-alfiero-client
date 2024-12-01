import { useState } from "react";
import axiosInstance from "../../api/axiosInstance";

const OffersManagement = () => {
  const [offer, setOffer] = useState({
    dishName: "",
    description: "",
    price: "",
    startDate: "", // Start date of the offer
    endDate: "", // End date of the offer
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOffer((prev) => ({ ...prev, [name]: value }));
  };

  // Function to format date as "DD MMM"
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, "0"); // Ensure two digits
    const month = date.toLocaleString("default", { month: "short" }); // Short month name
    return `${day} ${month}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the dates before sending
    const formattedStartDate = formatDate(offer.startDate);
    const formattedEndDate = formatDate(offer.endDate);

    const offerData = {
      ...offer,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
    };

    try {
      const response = await axiosInstance.post("/offer", offerData);
      alert("Offer updated successfully!");
      console.log(response.data);
    } catch (error) {
      console.error("Error updating offer:", error);
      alert("Failed to update offer.");
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Offers</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="dishName"
          placeholder="Dish Name"
          value={offer.dishName}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          value={offer.description}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={offer.price}
          onChange={handleChange}
          className="block w-full p-2 border rounded"
        />
        <label className="block">
          <span className="text-sm font-semibold">Start Date</span>
          <input
            type="date"
            name="startDate"
            value={offer.startDate}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>
        <label className="block">
          <span className="text-sm font-semibold">End Date</span>
          <input
            type="date"
            name="endDate"
            value={offer.endDate}
            onChange={handleChange}
            className="block w-full p-2 border rounded"
          />
        </label>
        <button
          type="submit"
          className="font-medium rounded bg-[#000000c9] hover:bg-[#000] text-white p-2 border border-[#00000071]"
        >
          Update Offer
        </button>
      </form>
    </div>
  );
};

export default OffersManagement;

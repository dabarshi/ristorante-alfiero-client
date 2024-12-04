import { useState, useEffect } from "react";
import axiosInstance from "../../api/axiosInstance";

const OffersManagement = () => {
  const [offer, setOffer] = useState({
    dishName: "",
    description: "",
    price: "",
    startDate: "", // Start date of the offer
    endDate: "", // End date of the offer
  });

  const [currentOffer, setCurrentOffer] = useState(null);

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

  const fetchCurrentOffer = async () => {
    try {
      const response = await axiosInstance.get("/offer");
      setCurrentOffer(response.data.offer);
    } catch (error) {
      console.error("Error fetching current offer:", error);
    }
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
      fetchCurrentOffer(); // Refresh the current offer
    } catch (error) {
      console.error("Error updating offer:", error);
      alert("Failed to update offer.");
    }
  };

  const handleDelete = async () => {
    try {
      await axiosInstance.delete("/offer");
      alert("Offer deleted successfully!");
      setCurrentOffer(null); // Clear the current offer after deletion
    } catch (error) {
      console.error("Error deleting offer:", error);
      alert("Failed to delete offer.");
    }
  };

  useEffect(() => {
    fetchCurrentOffer();
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Manage Offers</h2>

      <div className="grid md:grid-cols-2 gap-2">
        {/* current Offer */}
        <div className="">
          <h2 className="font-bold text-xl md:text-2xl bg-[#ffffff5d] rounded-sm py-4 text-center">
            Current Offer
          </h2>
          <div className="py-4 md:p-4">
            {currentOffer ? (
              <div className="mb-6 p-4 border rounded bg-gray-50">
                <h3 className="text-xl font-semibold">Current Offer</h3>
                <p>
                  <strong>Dish Name:</strong> {currentOffer.dishName}
                </p>
                <p>
                  <strong>Description:</strong>{" "}
                  {currentOffer.description || "N/A"}
                </p>
                <p>
                  <strong>Price:</strong> ${currentOffer.price}
                </p>
                <p>
                  <strong>Start Date:</strong> {currentOffer.startDate}
                </p>
                <p>
                  <strong>End Date:</strong> {currentOffer.endDate}
                </p>
                <button
                  onClick={handleDelete}
                  className="mt-4 font-medium rounded bg-red-600 hover:bg-red-700 text-white p-2 border border-red-500"
                >
                  Delete Offer
                </button>
              </div>
            ) : (
              <p className="mb-6 text-gray-900">No current offer available.</p>
            )}
          </div>
        </div>
        {/* update offer */}
        <div>
          <h2 className="font-bold text-xl md:text-2xl bg-[#ffffff5d] rounded-sm py-4 text-center">
            Add Offer
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4 py-4 md:p-4">
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
              placeholder="Discount"
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
      </div>
    </div>
  );
};

export default OffersManagement;

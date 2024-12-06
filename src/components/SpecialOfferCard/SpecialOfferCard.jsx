import React, { useState, useEffect } from "react";
import { XIcon } from "@heroicons/react/outline";
import axiosInstance from "../../api/axiosInstance";
import FeaturedCardModal from "../FeaturedCardModal/FeaturedCardModal";

const SpecialOfferCard = () => {
  const [offerData, setOfferData] = useState(null); // Current special offer data
  const [isVisible, setIsVisible] = useState(false); // Modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const { data } = await axiosInstance.get("/special-offers");
        setOfferData(data);
        setIsVisible(true);
      } catch (error) {
        console.error("Error fetching image:", error);
      }
    };
    fetchImage();
  }, []);

  if (!isVisible || !offerData) return null;

  return (
    <div className="relative">
      <div className="fixed top-1 right-1/2 translate-x-2/4  z-50 ">
        <div className="relative max-w-44 h-44 rounded-lg shadow-lg overflow-hidden pt-8">
          {/* Close Button */}
          <button
            className="absolute top-0 right-0 bg-[#ffffff46] rounded-full p-1"
            onClick={() => setIsVisible(false)}
          >
            <XIcon className="h-3 w-3 text-black" />
          </button>

          {/* Special Offer Tag */}
          <div className="absolute top-0 left-0 bg-red-600 text-white text-[8px] uppercase font-bold py-1 px-2 rounded">
            Special Offer
          </div>
          <img
            src={offerData.imageUrl}
            alt="Special Offer"
            className="w-full h-full object-cover"
            onClick={openModal}
          />
        </div>
      </div>
      {isModalOpen && (
        <FeaturedCardModal src={offerData.imageUrl} onClose={closeModal} />
      )}
    </div>
  );
};

export default SpecialOfferCard;

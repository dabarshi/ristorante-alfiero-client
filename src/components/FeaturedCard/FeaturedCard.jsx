import { useState } from "react";
import { FaImage } from "react-icons/fa";
import FeaturedCardModal from "../FeaturedCardModal/FeaturedCardModal";

const FeaturedCard = ({ data }) => {
  const { img, title, description, alt } = data;

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleDescription = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="space-y-5 p-2 relative max-w-96 md:max-w-72 lg:max-w-96">
      <div className="max-w-96 max-h-64 md:w-72 lg:w-96 group relative overflow-hidden">
        <img
          className="w-full object-cover group-hover:scale-110 brightness-90"
          style={{ transition: "transform 300ms ease-in" }}
          src={img}
          alt={alt}
        />

        <div
          className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 text-3xl text-[#c1c1c1] bg-[#00000079]"
          style={{ transition: "opacity 300ms ease-in" }}
        >
          <div
            className="border-2 border-[#c1c1c1] hover:bg-[#00000018] p-4 rounded-full cursor-pointer"
            style={{ transition: "background-color 300ms ease-in " }}
            onClick={openModal}
          >
            <span>
              <FaImage />
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-amber-400">{title}</h3>
      <div>
        <p
          className={`text-[#a4a4a4] font-medium text-sm text-justify ${
            isExpanded ? "" : "line-clamp-3"
          }`}
        >
          {description}
        </p>
        <button
          onClick={toggleDescription}
          className="text-white border-b-2 text-xs font-semibold mt-2"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      </div>
      {isModalOpen && (
        <FeaturedCardModal img={img} alt={alt} onClose={closeModal} />
      )}
    </div>
  );
};

export default FeaturedCard;

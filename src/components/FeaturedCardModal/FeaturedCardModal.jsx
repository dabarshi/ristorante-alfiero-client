import { useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const FeaturedCardModal = ({ img, alt, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="relative" ref={modalRef}>
        <button
          className="absolute top-1 right-1 text-3xl text-[#00000075]"
          onClick={onClose}
        >
          <IoIosCloseCircle />
        </button>
        <img src={img} alt={alt} className="max-w-full max-h-full rounded-md" />
      </div>
    </div>
  );
};

export default FeaturedCardModal;

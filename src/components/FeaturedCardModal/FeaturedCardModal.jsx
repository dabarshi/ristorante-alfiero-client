import { useEffect, useRef } from "react";
import { IoIosCloseCircle } from "react-icons/io";
const FeaturedCardModal = ({ src, alt, onClose }) => {
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
      <div className="relative" ref={modalRef}>
        <button
          className="absolute top-1 right-1 text-3xl text-[#00000075]"
          onClick={onClose}
        >
          <IoIosCloseCircle />
        </button>
        <img
          src={src}
          alt={alt}
          className=" max-w-[500px] max-h-96 w-full h-full rounded-md"
        />
      </div>
    </div>
  );
};

export default FeaturedCardModal;

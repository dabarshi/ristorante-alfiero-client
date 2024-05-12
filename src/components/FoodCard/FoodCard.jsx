import { FaImage } from "react-icons/fa";

const FoodCard = ({ data }) => {
  const { img, alt, title, price } = data;
  return (
    <div className="max-w-80 mx-auto space-y-6 text-center p-8 md:p-0">
      <div className="relative group overflow-hidden">
        <img
          className="w-full object-cover brightness-90 group-hover:scale-110"
          style={{ transition: "transform 300ms ease-in" }}
          src={img}
          alt={alt}
        />
        <div
          className="absolute inset-2 border-[1px] opacity-100 group-hover:opacity-0 border-amber-500"
          style={{ transition: "opacity 300ms ease-in" }}
        ></div>
        <div
          className="absolute inset-0 grid place-items-center opacity-0 group-hover:opacity-100 text-2xl text-[#c1c1c1] bg-[#00000079]"
          style={{ transition: "opacity 300ms ease-in" }}
        >
          <div
            className="border-2 border-[#c1c1c1] hover:bg-[#00000018] p-4 rounded-full"
            style={{ transition: "background-color 300ms ease-in " }}
          >
            <span>
              <FaImage />
            </span>
          </div>
        </div>
      </div>
      <div className="text-white space-y-2">
        <h3 className="font-bold tracking-tighter leading-7">{title}</h3>
        <hr className="border-amber-600" />
        <p className="font-bold tracking-tighter leading-7">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;

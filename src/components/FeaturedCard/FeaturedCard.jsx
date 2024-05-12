import { FaImage } from "react-icons/fa";

const FeaturedCard = ({ data }) => {
  const { img, title, description, alt } = data;
  return (
    <div className="space-y-5 p-2 ">
      {/* <div className="space-y-5"></div> */}
      <div className="max-w-80 group relative overflow-hidden">
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
            className="border-2 border-[#c1c1c1] hover:bg-[#00000018] p-4 rounded-full"
            style={{ transition: "background-color 300ms ease-in " }}
          >
            <span>
              <FaImage />
            </span>
          </div>
        </div>
      </div>
      <h3 className="font-semibold text-amber-400">{title}</h3>
      <p className="text-[#a4a4a4] text-sm text-justify">{description}</p>
      <button className="text-white text-sm border-amber-500 border-b-[1px] font-semibold py-1 ">
        Read More
      </button>
      {/* <div className="space-y-5"></div> */}
    </div>
  );
};

export default FeaturedCard;

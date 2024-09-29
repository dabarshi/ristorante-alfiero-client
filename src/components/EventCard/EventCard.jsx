import { FaCalendarAlt } from "react-icons/fa";
import { IoTimeOutline } from "react-icons/io5";

const EventCard = ({ data }) => {
  const { img, title, date, time, shortDescription } = data;

  return (
    <div className="space-y-5 p-2 shadow-lg">
      <div className=" group relative overflow-hidden">
        <img
          className="max-h-96 w-full object-cover group-hover:scale-110 brightness-90"
          style={{ transition: "transform 300ms ease-in" }}
          src={img}
        />
      </div>
      {/* Details */}
      <div className="px-2 pb-6">
        <div className="space-y-6 pb-8">
          <div>
            <h3 className="font-semibold mb-1 text-white">{title}</h3>
            <div className="flex gap-5 place-items-center">
              <p className="flex gap-2 place-items-center text-[#ffffff6b] text-sm">
                <span className="text-amber-700">
                  <FaCalendarAlt />
                </span>
                {date}
              </p>
              <p className="flex gap-2 place-items-center text-[#ffffff6b] text-sm">
                <span className="text-amber-700">
                  <IoTimeOutline />
                </span>
                {time}
              </p>
            </div>
          </div>
          <p className="text-[#a4a4a4] text-sm text-justify">
            {shortDescription}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

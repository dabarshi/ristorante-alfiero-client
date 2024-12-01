import { useState } from "react";
import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const FullMenuSection = ({
  imgSet,
  title,
  subtitle,
  data,
  customStyles,
  contentStyles,
}) => {
  const { img, alt } = imgSet;
  const [showAll, setShowAll] = useState(false);

  const visibleData = showAll ? data : data.slice(0, 6);

  return (
    <div className={`${customStyles}`}>
      <div className="py-12">
        <SectionTitle title={title} subTitle={subtitle} />
      </div>
      <div className="grid lg:grid-cols-2">
        {/* Image Section */}
        <div
          className={`col-span-1 bg-[#00000032]  md:p-12  lg:grid place-items-center`}
        >
          <div className="overflow-hidden">
            <img
              loading="lazy"
              className="w-full md:rounded-3xl object-cover shadow-lg"
              src={img}
              alt={alt}
            />
          </div>
        </div>

        {/* Menu Items Section */}
        <div className={`${contentStyles}`}>
          <div className="grid">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white px-12 md:px-12 py-12 md:py-12">
              {visibleData.map((item) => (
                <MenuCard key={item.id} data={item} />
              ))}
            </div>

            {/* Show More/Show Less Button */}
            {data.length > 6 && (
              <div className="text-center py-2">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="text-white text-xs border font-semibold tracking-tighter uppercase border-[#ffffff43] px-6 py-2 hover:bg-[#dfcfcf09] transition duration-300"
                >
                  {showAll ? "Less" : "More"}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FullMenuSection;

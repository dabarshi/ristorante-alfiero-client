import FeaturedCard from "../../components/FeaturedCard/FeaturedCard";
import { FeaturedCardData } from "../../data/data";

const Featured = () => {
  return (
    <div className="relative py-28 px-8 z-30 bg-[#141414]">
      <div className="max-w-7xl mx-auto">
        <div className="md:flex gap-10 -mt-40 space-y-20 md:space-y-0 ">
          {FeaturedCardData.map((data) => (
            <FeaturedCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;

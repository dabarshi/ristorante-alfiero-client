import EventCard from "../../components/EventCard/EventCard";
import { EventCardData } from "../../data/data";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const Events = () => {
  return (
    <div>
      <SecondaryHeroSection
        index={2}
        title={"Events"}
        subtitle={"Who we are"}
      />
      <div className="px-4 bg-[#121217] md:px-12 lg:px-24 py-20 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {EventCardData.map((data) => (
          <EventCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Events;

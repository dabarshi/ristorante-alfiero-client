import FoodCard from "../../components/FoodCard/FoodCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { FoodCardData } from "../../data/data";

const TodaySpecial = () => {
  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1623848932096-b196440bb57b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  // const backgroundImageUrl =
  //   "https://images.unsplash.com/photo-1535850452425-140ee4a8dbae?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  return (
    <div
      className="bg-cover bg-center bg-fixed"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      <div className="py-28 px-2 space-y-12 bg-black bg-opacity-80">
        <SectionTitle
          title={"Today's Speacial"}
          subTitle={" Fresh & delicious"}
        />
        <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-10">
          {FoodCardData.map((data) => (
            <FoodCard key={data.id} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TodaySpecial;

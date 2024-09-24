import MenuCard from "../../components/MenuCard/MenuCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";

const FullMenuSection = ({
  imgSet,
  title,
  subtitle,
  data,
  customStyles,
  order,
}) => {
  const { img, alt } = imgSet;
  return (
    <div className={`${customStyles} grid grid-cols-3`}>
      <div className={`${order}`}>
        <img loading="lazy"  className="w-full h-full object-cover overflow-hidden" src={img} alt={alt} />
      </div>
      <div className="col-span-2 grid place-items-center p-20">
        <SectionTitle title={title} subTitle={subtitle} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white py-20 px-12">
        {data.map((data) => (
            <MenuCard key={data.id} data={data} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default FullMenuSection;

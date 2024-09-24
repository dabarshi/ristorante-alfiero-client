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
        <img src={img} alt={alt} />
      </div>
      <div className="col-span-2 grid place-items-center">
        <SectionTitle title={title} subTitle={subtitle} />
        <MenuCard data={data} />
      </div>
    </div>
  );
};

export default FullMenuSection;

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
  // console.log(imgSet.img);
  const { img, alt } = imgSet;
  return (
    <div className="">
      <div className={`relative ${customStyles}`}>
        <div className="py-8">
          <SectionTitle title={title} subTitle={subtitle} />
        </div>

        <div className="relative py-40">
          <img
            loading="lazy"
            className="w-full h-full object-cover absolute inset-0"
            src={img}
            alt={alt}
          />
          <div className="grid grid-cols-2 md:max-w-[60%] mx-auto px-12 py-8 rounded-md bg-white/10 backdrop-blur-lg relative z-10">
            {data.map((data) => (
              <MenuCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div>
      {/* <div className={`${customStyles} grid lg:grid-cols-2`}>
        <div
          // style={{ backgroundImage: `url(${img})` }}
          className={`${order} hidden lg:block`}
        >
          <img
            loading="lazy"
            className="w-full h-full object-cover"
            src={img}
            alt={alt}
          />
        </div>
        <div className="grid py-12 md:py-20">
          <SectionTitle title={title} subTitle={subtitle} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-white py-20 px-12 md:px-12">
            {data.map((data) => (
              <MenuCard key={data.id} data={data} />
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default FullMenuSection;

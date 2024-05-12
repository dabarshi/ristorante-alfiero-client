const TestimonialCard = ({ data }) => {
  const { img, alt, name, text } = data;
  return (
    <div className="border-[1px] border-[#bdbdbd] rounded bg-[#1111112d] py-12 pe-12 shadow-lg">
      <div className="grid grid-cols-2 place-items-center gap-2 text-white">
        <div className=" grid place-items-center gap-2">
          <img className="h-16 rounded-full" src={img} alt={alt} />
          <h4 className="text-sm">{name}</h4>
        </div>
        <p className="text-xs text-[#bdbdbd] text-justify">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

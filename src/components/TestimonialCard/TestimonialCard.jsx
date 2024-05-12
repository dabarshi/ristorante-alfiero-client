const TestimonialCard = ({ data }) => {
  const { img, alt, name, text } = data;
  return (
    <div className="max-w-80 mx-auto border-[1px] border-[#bdbdbd] rounded bg-[#ffffff04] backdrop-blur-sm py-12 px-8 shadow-lg">
      <div className="grid place-items-center gap-2 text-white">
        <div className="grid place-items-center gap-2">
          <img className="h-16 rounded-full" src={img} alt={alt} />
          <h4 className="text-sm">{name}</h4>
        </div>
        <p className="text-xs text-[#bdbdbd] text-justify">{text}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;

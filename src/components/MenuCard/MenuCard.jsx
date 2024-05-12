const MenuCard = ({ data }) => {
  const { img, alt, title, description, price } = data;
  return (
    <div>
      <div className="flex flex-col lg:flex-row gap-5 justify-center ">
        <div className="w-20 aspect-square rounded-full overflow-hidden">
          <img className="rounded-full object-contain" src={img} alt={alt} />
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-end gap-2">
            <h3 className="text-nowrap">{title}</h3>
            <div className="w-full border-b-[1px] border-dotted"></div>
            <p>${price}</p>
          </div>
          <p className="font-thin text-[#f1f1f1bb]">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

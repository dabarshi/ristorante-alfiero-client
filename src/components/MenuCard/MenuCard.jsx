const MenuCard = ({ data }) => {
  const { img, alt, dishNameInEnglish, dishNameInItalian, price } = data;
  return (
    <div className="hover:bg-[#dfcfcf11] hover:shadow-md px-2 py-2 rounded-md">
      <div className="grid lg:grid-cols-6 gap-3">
        <div className="max-w-12 aspect-square rounded-full overflow-hidden">
          <img className="rounded-full object-contain" src={img} alt={alt} />
        </div>
        <div className=" col-span-5 gap-2 grid md:grid-cols-4">
          <div className="col-span-3 space-y-2">
            <h3 className="text-sm uppercase ">{dishNameInEnglish}</h3>
            {/* <div className="w-full border-b-[1px] border-dotted"></div> */}
          <p className="font-thin text-xs text-[#f1f1f1bb] uppercase">{dishNameInItalian}</p>
          </div>
            <p>${price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

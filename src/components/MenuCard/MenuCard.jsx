const MenuCard = ({ data }) => {
  const { dishNameInEnglish, dishNameInItalian, price } = data;
  return (
    <div className="hover:bg-[#dfcfcf11] hover:shadow-md px-2 py-2 rounded-md">
      <div className="grid lg:grid-cols-6">
        <div className=" col-span-5 grid md:grid-cols-4">
          <div className="col-span-3 space-y-2">
            <h3 className="text-sm uppercase ">{dishNameInEnglish}</h3>
            <p className="font-thin text-xs text-[#f1f1f1bb] uppercase">
              {dishNameInItalian}
            </p>
          </div>
          <p className="">€ {price}</p>
        </div>
      </div>
    </div>
  );
};

export default MenuCard;

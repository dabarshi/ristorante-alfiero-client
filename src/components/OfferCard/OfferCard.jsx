const OfferCard = ({ offer, error }) => {
  if (error) {
    return <div className="absolute top-0 right-0"></div>;
  }

  if (!offer) {
    return <div className="absolute top-0 right-0"></div>;
  }

  const { dishName, description, price, startDate, endDate } = offer;

  return (
    <div className="absolute bottom-28 right-0 w-full  grid place-items-center shadow-2xl z-50 animate-slideIn">
      <div className="px-2 py-3 w-full text-white bg-[rgb(153,24,24)] flex justify-center items-center">
        <div className="flex items-center gap-4 md:gap-5">
          <div className="flex items-baseline gap-2"></div>
          <p className="font-bold md:text-2xl">{price}% OFF</p>
          <p className="font-bold md:text-2xl font-['dancing_script']">
            on {dishName}
          </p>
          <p>
            <span className="font-semibold text-xs md:text-base">
              {startDate}{" "}
            </span>
            <span className="text-xs">To </span>
            <span className="font-semibold text-xs md:text-base">
              {endDate}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

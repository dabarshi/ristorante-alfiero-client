import TransparentLogo from "../../assets/logo/transparentLogo.png";
const OfferCard = ({ offer, error }) => {
  if (error) {
    return <div className="absolute top-0 right-0"></div>;
  }

  if (!offer) {
    return <div className="absolute top-0 right-0"></div>;
  }

  const { dishName, description, price, startDate, endDate } = offer;

  return (
    <div className="absolute top-0 right-1/2 bg-amber-600 grid place-items-center shadow-lg rounded z-10 animate-drop">
      <div className="space-y-1 py-2 md:pt-8 md:py-4 px-4 text-center">
        <div className="bg-white mx-auto shadow-lg max-w-20 rounded-full">
          <img src={TransparentLogo} alt="Alfiero Logo" className="w-full" />
        </div>
        <h1 className="font-semibold text-xs py-2 text-[#ffffffc8]">
          Bite Into Big Discounts!
        </h1>
        <div>
          <h2 className="md:text-lg uppercase text-white font-bold">
            {dishName}
          </h2>
          <p className="font-thin text-xs text-white pt-1">
            Price: <span className="font-bold">€{price}</span>{" "}
          </p>
          <p className="font-thin text-xs text-white pt-1">
            From <span className="font-bold">{startDate}</span> to{" "}
            <span className="font-bold">{endDate}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default OfferCard;

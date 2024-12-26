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
    <div className="absolute top-[450px] right-1 bg-white grid pt-[2px] place-items-center shadow-lg z-10 animate-slideIn">
      <div className="px-2 py-1 text-black bg-amber-600">
        <p>
          <span className="font-bold">{price} </span>
          <span className="text-xs">OFF </span>
          <span className="font-bold">{dishName} </span>
          <span className="text-xs">Till </span>
          <span className="font-semibold">{startDate}</span>
        </p>
      </div>
    </div>
  );
};

export default OfferCard;

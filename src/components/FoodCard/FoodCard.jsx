const FoodCard = ({ data }) => {
  const { img, alt, title, price } = data;
  return (
    <div className="space-y-6 text-center p-8 md:p-0">
      <img src={img} alt={alt} />
      <div className="text-white space-y-2">
        <h3 className="font-bold tracking-tighter leading-7">{title}</h3>
        <hr className="border-amber-600" />
        <p className="font-bold tracking-tighter leading-7">${price}</p>
      </div>
    </div>
  );
};

export default FoodCard;

import TransparentLogo from "../../assets/logo/transparentLogo.png";
const NameCard = () => {
  return (
    <div className="bg-white bg-opacity-50 w-28 h-full absolute top-0 right-0 grid place-items-center z-20 px-2">
      <div>
        <p className="text-center text-lg">
          Ti aspettiamo
          <br />
          <span className="font-bold text-xl">[ pranzo e cena ]</span>
        </p>
        <div className="bg-white bg-opacity-40 rounded-full">
          <img src={TransparentLogo} alt="Alfiero Logo" className="w-full" />
        </div>
        <p className="text-center text-lg">
          dal
          <br />
          <span className="font-bold">Lunedi</span> <br /> alla{" "}
          <span className="font-bold">Domenica</span>
        </p>
      </div>
    </div>
  );
};

export default NameCard;

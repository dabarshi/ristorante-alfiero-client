import style from "./Buttons.module.css";

export const PrimaryButton = ({ text, btnStyle }) => {
  return (
    <button
      className={`text-xs md:text-base ${
        btnStyle ? btnStyle : style.btnPrimary
      }`}
    >
      {text}
    </button>
  );
};


const SectionTitle = ({ title, subTitle }) => {
  return (
    <div className="space-y-8 text-center">
      <div className="space-y-2">
        <h3 className="text-white font-bold text-2xl uppercase tracking-widest">
          {title}
        </h3>
        <h6 className="text-amber-400 font-['dancing_script'] tracking-[0.2em] text-lg">
          {subTitle}
        </h6>
      </div>
      <hr className="w-12 border-amber-600 mx-auto" />
    </div>
  );
};

export default SectionTitle;

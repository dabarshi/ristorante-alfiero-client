import BlogSection from "../../sections/BlogsSection";
import SecondaryHeroSection from "../../sections/SecondayHeroSection";

const Blogs = () => {
  return (
    <div>
      <SecondaryHeroSection
        index={3}
        title={"Blog"}
        subtitle={"Latest From us"}
      />
      <div className="">
        <BlogSection />
      </div>
    </div>
  );
};

export default Blogs;

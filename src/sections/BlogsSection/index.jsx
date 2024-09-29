import BlogCard from "../../components/Blogs/BlogCard";
import RecentPosts from "../../components/Blogs/RecentPosts";
import { BlogPostsData, RecentPostsData, TagsData } from "../../data/data";

const BlogSection = () => {
  return (
    <div className="bg-[#18191b]">
      <div className="container mx-auto flex flex-col lg:flex-row py-12">
        {/* Posts Section */}
        <div className="lg:w-2/3 px-4">
          {BlogPostsData.map((post, index) => (
            <BlogCard key={index} post={post} />
          ))}
          {/* Pagination */}
          <div className="flex text-white font-bold justify-center my-8">
            <button className="px-4 py-2 hover:bg-[#ffffff09] border-[1px] border-[#ca8f4632] rounded-l-lg">
              «
            </button>
            <button className="px-4 py-2 hover:bg-[#ffffff09] border-[1px] border-[#ca8f4632]">
              1
            </button>
            <button className="px-4 py-2 hover:bg-[#ffffff09] border-[1px] border-[#ca8f4632]">
              2
            </button>
            <button className="px-4 py-2 hover:bg-[#ffffff09] border-[1px] border-[#ca8f4632] rounded-r-lg">
              »
            </button>
          </div>
        </div>
        {/* Sidebar */}
        <div className="lg:w-1/3 px-4">
          {/* Recent Posts */}
          <RecentPosts posts={RecentPostsData} />

          {/* About Us */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 tracking-tighter text-white">
              About Us
            </h3>
            <div className="bg-[#ca8e46] h-[2px] w-6 mb-8"></div>
            <p className="text-gray-400 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className="bg-[#ca8f4652] h-[1px] my-12"></div>
          </div>
          {/* Tags */}
          <div className="mb-8">
            <h3 className="text-xl font-bold mb-4 tracking-tighter text-white">
              Tags
            </h3>
            <div className="bg-[#ca8e46] h-[2px] w-6 mb-8"></div>
            <div className="flex flex-wrap gap-2">
              {TagsData.map((tag, index) => (
                <span
                  key={index}
                  className="px-3 py-1 text-[#ca8e46] text-sm border-[1px] border-[#fff2] cursor-pointer"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="bg-[#ca8f4652] h-[1px] my-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogSection;

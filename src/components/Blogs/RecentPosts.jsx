const RecentPosts = ({ posts }) => {
  return (
    <div className="mb-8">
      <h3 className="text-xl font-bold mb-4 tracking-tighter text-white">
        Recent Posts
      </h3>
      <div className="bg-[#ca8e46] h-[2px] w-6 mb-8"></div>
      <ul className="">
        {posts.map((post, index) => (
          <li
            key={index}
            className="mb-4 border-b-[1px] border-[#ffffff12] pb-2 flex items-start"
          >
            <div className="">
              <span className="whitespace-nowrap bg-[#ca8e46] text-xs font-semibold text-[#00000094] px-3 py-1">
                {post.date}
              </span>
            </div>
            <div className="ml-4">
              <a href="#" className="font-semibold text-white transition">
                {post.title}
              </a>
            </div>
          </li>
        ))}
      </ul>

      <div className="bg-[#ca8f4652] h-[1px] my-12"></div>
    </div>
  );
};

export default RecentPosts;

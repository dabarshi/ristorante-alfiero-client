const BlogCard = ({ post }) => {
  return (
    <div className="border-b-[1px] border-b-[#ffffff4e] pb-4 mb-12">
      <div>
        <img src={post.imageUrl} alt={post.title} className="w-full" />
        <div className="flex gap-5">
          <div>
            <p className="bg-[#ca8e46] text-[#1a2530] text-3xl font-semibold px-3 py-4">
              {post.date.split(" ")[1]}
            </p>
            <p className="pl-1 text-white uppercase font-semibold tracking-[0.5em] text-lg border-b-[4px] border-b-[#ffffff4a]">
              {post.date.split(" ")[0]}
            </p>
          </div>
          <div className="py-4">
            <h2 className="text-lg font-bold text-white">{post.title}</h2>
            <p className="text-sm text-[#fff8] text-justify ">{post.content}</p>
          </div>
        </div>
      </div>
      <button className="bg-[#ca8e46] uppercase tracking-tighter float-right font-semibold text-black px-4 py-2">
        Read More
      </button>
    </div>
  );
};

export default BlogCard;

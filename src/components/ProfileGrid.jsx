import { posts } from "../data/data";

const ProfileGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-[2px]">
      {posts.map((post) => (
        <div
          key={post.id}
          className="aspect-square overflow-hidden bg-gray-100"
        >
          <img
            src={post.image}
            alt={post.caption}
            className="w-full h-full object-cover hover:opacity-90 transition cursor-pointer"
            loading="lazy"
          />
        </div>
      ))}
    </div>
  );
};

export default ProfileGrid;

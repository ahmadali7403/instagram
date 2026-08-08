import { posts } from "../data/data";
import { RiVideoLine } from "react-icons/ri";
const ProfileGrid = ({ activeTab }) => {
  if (activeTab === "tagged") {
    return (
      <div className="flex flex-col items-center justify-center py-20 px-5 pb-11">
        <div className="w-16 h-16 rounded-full border-2 border-black flex items-center justify-center mb-4">
          <span className="text-2xl">👤</span>
        </div>

        <h2 className="text-lg font-semibold">No tagged posts</h2>

        <p className="text-sm text-[#737373] text-center mt-2">
          When people tag you in photos and videos, they'll appear here.
        </p>
      </div>
    );
  }

  if (activeTab === "reels") {
    const reelPosts = posts.slice(0, 8);

    return (
      <div className="grid grid-cols-3 gap-[2px] pb-11">
        {reelPosts.map((post) => (
          <div
            key={post.id}
            className="aspect-[3/4] overflow-hidden bg-black relative"
          >
            <video
              src={post.video}
              className="w-full h-full object-cover"
              muted
              loop
              playsInline
              preload="metadata"
            />

            {/* Reel icon */}
            <div className="absolute top-2 right-2 text-white">
              <RiVideoLine size={20} />
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-3 gap-[2px] pb-11">
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

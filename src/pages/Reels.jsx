import { posts } from "../data/data";
import ReelCard from "../components/ReelCard";
import ReelHeader from "../components/ReelHeader";

const Reels = () => {
  return (
    <div className="relative h-screen bg-black">
      {/* Fixed Header */}
      <ReelHeader />

      {/* Reels */}
      <div className="h-screen overflow-y-auto snap-y snap-mandatory scrollbar-hide">
        {posts.map((post) => (
          <ReelCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default Reels;

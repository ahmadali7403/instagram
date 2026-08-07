import { posts } from "../data/data";
import ReelCard from "../components/ReelCard";

const Reels = () => {
  return (
    <div className="h-screen overflow-y-scroll snap-y snap-mandatory scrollbar-hide bg-black">
      {posts.map((post) => (
        <ReelCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Reels;

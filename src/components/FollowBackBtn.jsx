import { useState } from "react";

const FollowBackBtn = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      className="bg-[#0095F6] text-white text-[13px] font-semibold px-4 py-2 rounded-lg cursor-pointer hover:bg-[#1877F2] transition"
      onClick={() => setIsFollowing(!isFollowing)}
    >
      {isFollowing ? "Following" : "Follow back"}
    </button>
  );
};

export default FollowBackBtn;

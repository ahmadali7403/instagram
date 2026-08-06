import { useState } from "react";

const FollowButton = () => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <button
      onClick={() => setIsFollowing(!isFollowing)}
      className={`text-[14px] font-semibold cursor-pointer transition bg-gray-300 text-black py-1 px-2 rounded-lg hover:scale-105`}
    >
      {isFollowing ? "Following" : "Follow"}
    </button>
  );
};

export default FollowButton;

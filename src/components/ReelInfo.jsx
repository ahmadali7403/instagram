import { MdVerified } from "react-icons/md";
import { useState } from "react";
const ReelInfo = ({ username, profile, verified, caption, audio }) => {
  const [isFollowing, setIsFollowing] = useState(false);
  return (
    <div className="absolute bottom-22 left-4 right-24 text-white z-20">
      <div className="flex items-center gap-3 mb-1">
        <img
          src={profile}
          alt={username}
          className="w-10 h-10 rounded-full border object-cover cursor-pointer"
        />

        <span className="font-semibold flex items-center gap-1 cursor-pointer">
          {username}
          {verified && <MdVerified className="text-blue-500" />}
        </span>

        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={`border px-4 py-1 rounded-lg text-sm cursor-pointer ${!isFollowing ? "bg-blue-400 text-white border-none" : ""}`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <div className="flex gap-2">
        <p className="text-sm mb-2">{caption}</p>

        <p className="text-sm font-medium">🎵 {audio}</p>
      </div>
    </div>
  );
};

export default ReelInfo;

import { MdVerified } from "react-icons/md";
import { useState } from "react";

const ReelInfo = ({ username, profile, verified, caption, audio }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  return (
    <div className="text-white w-full">
      {/* Username + Follow */}
      <div className="flex items-center gap-3">
        <img
          src={profile}
          alt={username}
          className="w-9 h-9 rounded-full object-cover cursor-pointer"
        />

        <span className="font-semibold flex items-center gap-1 cursor-pointer text-[15px]">
          {username}
          {verified && <MdVerified className="text-[#0095F6] text-[16px]" />}
        </span>

        <button
          onClick={() => setIsFollowing(!isFollowing)}
          className={`ml-2 border px-4 py-1 rounded-lg text-sm font-medium transition cursor-pointer ${
            !isFollowing
              ? "bg-[#0095F6] text-white border-[#0095F6]"
              : "border-white text-white"
          }`}
        >
          {isFollowing ? "Following" : "Follow"}
        </button>
      </div>

      <div className="flex gap-2">
        {/* Caption */}
        <p className="text-[14px] leading-5 mb-2">{caption}</p>

        {/* Audio */}
        <p className="text-[13px] font-medium opacity-90">🎵 {audio}</p>
      </div>
    </div>
  );
};

export default ReelInfo;

import { HiMenuAlt4 } from "react-icons/hi";
import { MdVerified } from "react-icons/md";
import FollowButton from "./FollowButton";

const PostHeader = ({ username, verified, profile }) => {
  return (
    <header className="flex items-center justify-between px-2.5 py-1">
      {/* Left */}
      <div className="flex items-center gap-3 cursor-pointer">
        <img
          src={profile}
          alt={username}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <div className="flex items-center gap-1">
            <span className="text-[14px] font-semibold text-[#262626] cursor-pointer">
              {username}
            </span>

            {verified && <MdVerified className="text-[#0095F6] text-[14px]" />}
          </div>

          <p className="text-[12px] text-[#737373]">Suggested for you</p>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <FollowButton />

        <button className="cursor-pointer">
          <HiMenuAlt4 className="text-[24px] text-[#707070] cursor-pointer" />
        </button>
      </div>
    </header>
  );
};

export default PostHeader;

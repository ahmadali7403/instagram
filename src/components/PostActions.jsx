import { FaRegHeart, FaRegComment } from "react-icons/fa6";
import { RxLoop } from "react-icons/rx";
import { LuSend } from "react-icons/lu";
import { VscBookmark } from "react-icons/vsc";

const PostActions = ({ likes, comments, reposts, shares }) => {
  return (
    <div className="flex items-center justify-between px-3 py-1 pb-0.5">
      {/* Left */}
      <div className="flex items-center gap-5">
        <button className="flex items-center gap-1.5 cursor-pointer">
          <FaRegHeart className="text-[24px]" />
          <span className="text-[13px] font-medium">{likes}</span>
        </button>

        <button className="flex items-center gap-1.5 cursor-pointer">
          <FaRegComment className="text-[23px]" />
          <span className="text-[13px] font-medium">{comments}</span>
        </button>

        <button className="flex items-center gap-1.5 cursor-pointer">
          <RxLoop className="text-[25px]" />
          <span className="text-[13px] font-medium">{reposts}</span>
        </button>

        <button className="flex items-center gap-1.5 cursor-pointer">
          <LuSend className="text-[22px]" />
          <span className="text-[13px] font-medium">{shares}</span>
        </button>
      </div>

      {/* Right */}
      <button className="cursor-pointer">
        <VscBookmark className="text-[22px]" />
      </button>
    </div>
  );
};

export default PostActions;

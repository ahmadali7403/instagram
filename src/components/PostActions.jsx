import { FaRegHeart, FaHeart, FaRegComment, FaBookmark } from "react-icons/fa";

import { RxLoop } from "react-icons/rx";
import { LuSend } from "react-icons/lu";
import { VscBookmark } from "react-icons/vsc";

const PostActions = ({
  likes,
  comments,
  reposts,
  shares,
  isLiked,
  isSaved,
  isReposted,
  onLike,
  onComment,
  onShare,
  onSave,
  onRepost,
}) => {
  return (
    <div className="flex items-center justify-between px-4 py-3">
      {/* Left */}
      <div className="flex items-center gap-5">
        {/* Like */}
        <button
          onClick={onLike}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          {isLiked ? (
            <FaHeart className="text-[22px] text-red-500" />
          ) : (
            <FaRegHeart className="text-[22px]" />
          )}

          <span className="text-[13px] font-medium">{likes}</span>
        </button>

        {/* Comment */}
        <button
          onClick={onComment}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          <FaRegComment className="text-[23px]" />

          <span className="text-[13px] font-medium">{comments}</span>
        </button>

        {/* Repost */}
        <button
          onClick={onRepost}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          <RxLoop
            className={`text-[25px] ${
              isReposted ? "text-green-500" : "text-black"
            }`}
          />

          <span
            className={`text-[13px] font-medium ${
              isReposted ? "text-green-500" : "text-black"
            }`}
          >
            {reposts}
          </span>
        </button>

        {/* Share */}
        <button
          onClick={onShare}
          className="flex items-center gap-1.5 cursor-pointer"
        >
          <LuSend className="text-[22px]" />

          <span className="text-[13px] font-medium">{shares}</span>
        </button>
      </div>

      {/* Save */}
      <button onClick={onSave} className="cursor-pointer">
        {isSaved ? (
          <FaBookmark className="text-[22px]" />
        ) : (
          <VscBookmark className="text-[22px]" />
        )}
      </button>
    </div>
  );
};

export default PostActions;

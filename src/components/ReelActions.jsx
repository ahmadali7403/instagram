

import {
  FaRegHeart,
  FaHeart,
  FaRegComment,
  FaRegBookmark,
  FaBookmark,
} from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const ReelActions = ({
  profile,
  likes,
  comments,
  shares,
  isLiked,
  isSaved,
  onLike,
  onComment,
  onShare,
  onSave,
}) => {
  return (
    <div className="flex flex-col items-center gap-5 text-white pb-4">
      {/* Like */}
      <button
        onClick={onLike}
        className="flex flex-col items-center cursor-pointer"
      >
        {isLiked ? (
          <FaHeart size={30} className="text-red-500" />
        ) : (
          <FaRegHeart size={30} className="text-white" />
        )}

        <span className="mt-1 text-xs font-medium">{likes}</span>
      </button>

      {/* Comment */}
      <button
        onClick={onComment}
        className="flex flex-col items-center cursor-pointer"
      >
        <FaRegComment size={30} />

        <span className="mt-1 text-xs font-medium">{comments}</span>
      </button>

      {/* Share */}
      <button
        onClick={onShare}
        className="flex flex-col items-center cursor-pointer"
      >
        <FiSend size={30} />

        <span className="mt-1 text-xs font-medium">{shares}</span>
      </button>

      {/* Save */}
      <button onClick={onSave} className="cursor-pointer">
        {isSaved ? <FaBookmark size={28} /> : <FaRegBookmark size={28} />}
      </button>

      {/* More */}
      <button className="cursor-pointer">
        <BsThreeDots size={28} />
      </button>

      {/* Profile */}
      <img
        src={profile}
        alt="Profile"
        className="w-9 h-9 rounded-lg border border-white object-cover"
      />
    </div>
  );
};

export default ReelActions;

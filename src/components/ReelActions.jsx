import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const ReelActions = ({ profile, likes, comments, shares }) => {
  return (
    <div className="flex flex-col items-center gap-5 text-white pb-3">
      {/* Like */}
      <div className="flex flex-col items-center cursor-pointer">
        <FaRegHeart size={30} />
        <span className="mt-1 text-xs font-medium">{likes}</span>
      </div>

      {/* Comment */}
      <div className="flex flex-col items-center cursor-pointer">
        <FaRegComment size={30} />
        <span className="mt-1 text-xs font-medium">{comments}</span>
      </div>

      {/* Share */}
      <div className="flex flex-col items-center cursor-pointer">
        <FiSend size={30} />
        <span className="mt-1 text-xs font-medium">{shares}</span>
      </div>

      {/* Save */}
      <button className="cursor-pointer">
        <FaRegBookmark size={28} />
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

import { FaRegHeart, FaRegComment, FaRegBookmark } from "react-icons/fa";

import { FiSend } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const ReelActions = ({ profile, likes, comments, shares }) => {
  return (
    <div className="absolute bottom-12 right-3 flex flex-col items-center gap-6 text-white z-20">
      <div className="flex flex-col items-center cursor-pointer">
        <FaRegHeart size={28} />
        <span className="text-xs">{likes}</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <FaRegComment size={28} />
        <span className="text-xs">{comments}</span>
      </div>

      <div className="flex flex-col items-center cursor-pointer">
        <FiSend size={28} />
        <span className="text-xs">{shares}</span>
      </div>

      <FaRegBookmark size={28} className="cursor-pointer" />

      <BsThreeDots size={28} className="cursor-pointer" />

      <img
        src={profile}
        alt=""
        className="w-8 h-8 rounded-md border object-cover"
      />
    </div>
  );
};

export default ReelActions;

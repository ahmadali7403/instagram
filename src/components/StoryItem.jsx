import { FaPlus } from "react-icons/fa6";

const StoryItem = ({ image, username }) => {
  return (
    <div className="flex flex-col items-center flex-shrink-0 cursor-pointer">
      <div className="relative">
        <div className="bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 p-[2px] rounded-full">
          <div className="bg-white p-[3px] rounded-full">
            <img
              src={image}
              alt={username}
              className="w-17 h-17 rounded-full object-cover"
            />
          </div>
        </div>

        {username === "Your story" && (
          <div className="absolute bottom-1 right-0 flex h-5 w-5 items-center justify-center rounded-full border-2 border-white bg-black">
            <FaPlus className="text-[10px] text-white" />
          </div>
        )}
      </div>

      <p className="mt-1 w-16 truncate text-center text-xs">{username}</p>
    </div>
  );
};

export default StoryItem;

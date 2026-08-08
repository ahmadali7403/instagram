import { FiGrid } from "react-icons/fi";
import { RiVideoLine } from "react-icons/ri";
import { FiUser } from "react-icons/fi";

const ProfileTabs = () => {
  return (
    <div className="flex border-t border-gray-200">
      <button className="flex-1 flex justify-center py-3 border-b-2 border-black">
        <FiGrid size={22} />
      </button>

      <button className="flex-1 flex justify-center py-3 text-[#737373]">
        <RiVideoLine size={23} />
      </button>

      <button className="flex-1 flex justify-center py-3 text-[#737373]">
        <FiUser size={21} />
      </button>
    </div>
  );
};

export default ProfileTabs;

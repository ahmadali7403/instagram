import { FiGrid, FiUser } from "react-icons/fi";
import { RiVideoLine } from "react-icons/ri";

const ProfileTabs = ({ activeTab, setActiveTab }) => {
  return (
    <div className="sticky top-[45px] z-50 flex border-t border-gray-200 bg-white">
      <button
        onClick={() => setActiveTab("posts")}
        className={`flex-1 flex justify-center py-3 cursor-pointer ${
          activeTab === "posts" ? "border-b-2 border-black" : "text-[#737373]"
        }`}
      >
        <FiGrid size={22} />
      </button>

      <button
        onClick={() => setActiveTab("reels")}
        className={`flex-1 flex justify-center py-3 cursor-pointer ${
          activeTab === "reels" ? "border-b-2 border-black" : "text-[#737373]"
        }`}
      >
        <RiVideoLine size={23} />
      </button>

      <button
        onClick={() => setActiveTab("tagged")}
        className={`flex-1 flex justify-center py-3 cursor-pointer ${
          activeTab === "tagged" ? "border-b-2 border-black" : "text-[#737373]"
        }`}
      >
        <FiUser size={21} />
      </button>
    </div>
  );
};

export default ProfileTabs;

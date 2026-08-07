import { HiOutlineCamera } from "react-icons/hi";

const ReelHeader = () => {
  return (
    <div className="absolute top-0 left-0 right-0 flex items-center justify-between p-4 text-white z-20">
      <h2 className="text-2xl font-bold cursor-pointer">Reels</h2>

      <button>
        <HiOutlineCamera size={28} className="cursor-pointer" />
      </button>
    </div>
  );
};

export default ReelHeader;

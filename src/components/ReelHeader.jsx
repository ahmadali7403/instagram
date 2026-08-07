import { HiOutlineCamera } from "react-icons/hi";

const ReelHeader = () => {
  return (
    <header className="fixed top-8 left-0 right-0 z-50 flex items-center justify-between px-4 pt-3 pb-2 bg-transparent">
      <h1 className="text-white text-[24px] font-bold tracking-tight">Reels</h1>

      <button className="cursor-pointer">
        <HiOutlineCamera
          size={28}
          className="text-white hover:scale-105 transition-transform"
        />
      </button>
    </header>
  );
};

export default ReelHeader;

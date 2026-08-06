import logo from "../assets/instagram-logo.svg";

import { RxPlus } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";

const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[45px] items-center justify-between bg-white px-2">
      {/* Plus */}
      <button className="cursor-pointer">
        <RxPlus className="text-[22px] text-black" />
      </button>

      {/* Logo */}
      <img
        src={logo}
        alt="Instagram"
        className="h-[24px] w-auto cursor-pointer"
      />

      {/* Heart */}
      <button className="cursor-pointer">
        <FaRegHeart className="text-[18px] text-black" />
      </button>
    </header>
  );
};

export default TopNavbar;

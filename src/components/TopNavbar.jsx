import logo from "../assets/instagram-logo.svg";

import { RxPlus } from "react-icons/rx";
import { FaRegHeart } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
const TopNavbar = () => {
  return (
    <header className="sticky top-0 z-50 flex h-[45px] items-center justify-between bg-white px-2">
      {/* Plus */}
      <NavLink to="/create" className="cursor-pointer">
        {" "}
        <button className="cursor-pointer">
          <RxPlus className="text-[26px] text-black" />
        </button>
      </NavLink>

      {/* Logo */}
      <NavLink to="/" className="cursor-pointer">
        <img
          src={logo}
          alt="Instagram"
          className="h-[28px] w-auto cursor-pointer"
        />
      </NavLink>

      {/* Heart */}
      <NavLink to="/notifications" className="cursor-pointer">
        <button className="cursor-pointer">
          <FaRegHeart className="text-[24px] text-black" />
        </button>
      </NavLink>
    </header>
  );
};

export default TopNavbar;

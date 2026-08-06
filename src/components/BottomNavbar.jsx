import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { VscSearchCompact } from "react-icons/vsc";
import { LuSend } from "react-icons/lu";
import { MdSlowMotionVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const BottomNavbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-11 border-t border-gray-200 bg-white">
      <div className="flex h-full items-center justify-around">
        <NavLink to="/">
          <GoHomeFill className="text-[26px]" />
        </NavLink>

        <NavLink to="/search">
          <MdSlowMotionVideo className="text-[26px]" />
        </NavLink>

        <NavLink to="/create">
          <LuSend className="text-[26px]" />
        </NavLink>

        <NavLink to="/reels">
          <VscSearchCompact className="text-[26px]" />
        </NavLink>

        <NavLink to="/profile">
          <CgProfile className="text-[26px]" />
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;

import { NavLink } from "react-router-dom";
import { GoHomeFill } from "react-icons/go";
import { VscSearchCompact } from "react-icons/vsc";
import { LuSend } from "react-icons/lu";
import { MdSlowMotionVideo } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

const BottomNavbar = () => {
  const iconSize = "text-[28px]";

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-14 border-t border-[#dbdbdb] bg-white">
      <div className="flex h-full items-center justify-around">
        <NavLink to="/">
          <GoHomeFill className={iconSize} />
        </NavLink>

        <NavLink to="/search">
          <MdSlowMotionVideo className={iconSize} />
        </NavLink>

        <NavLink to="/create">
          <LuSend className={iconSize} />
        </NavLink>

        <NavLink to="/reels">
          <VscSearchCompact className={iconSize} />
        </NavLink>

        <NavLink to="/profile">
          <CgProfile className={iconSize} />
        </NavLink>
      </div>
    </nav>
  );
};

export default BottomNavbar;
